
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc, writeBatch } from "firebase/firestore/lite";
import components  from "./data";

const firebaseConfig = {
  apiKey: "AIzaSyAvojenWcasq9ozwtV7zpekYcDrxK-xXIQ",
  authDomain: "ecommerce-react-almiron.firebaseapp.com",
  projectId: "ecommerce-react-almiron",
  storageBucket: "ecommerce-react-almiron.firebasestorage.app",
  messagingSenderId: "510171134101",
  appId: "1:510171134101:web:437bda4be716492977039c"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)



async function asyncData() {
  
    const collectionRef = collection(db, "components")
    const componentsSnapshot = await getDocs(collectionRef)
    
    const documentsData = componentsSnapshot.docs.map(doc => {return {...doc.data(), id: doc.id}})
    
    
    return documentsData
  



}

  export async function asyncDataById(itemID) {
    const docRef = doc(db, "components", itemID)
    const docSnapshot = await getDoc(docRef)
    const docData = docSnapshot.data()
    return docData
}


  export async function asyncDataByCategory(catID) {
  
   const componentsCollectionRef = collection(db, "components")
    const q = query(componentsCollectionRef, where("category", "==", catID))
  
    const componentsSnapshot = await getDocs(q)
    
    const documentsData = componentsSnapshot.docs.map(doc => {return {...doc.data(), id: doc.id}})
    
    
    return documentsData
  
  }
  
    export async function exportComponentsToDB(){
      for(let item of components){
        delete item.id
       const docID = await addDoc(collection(db, "components"), item)
       console.log(docID.id)
      }
    }


    export async function exportComponents() {
     const batch = writeBatch(db)
      
      components.forEach(item =>{
        const itemid = item.id
        delete item.id 
        const newDoc = doc(db, "components", String(itemid))
        batch.set(newDoc, item)
      })

      const commitRes= await batch.commit()
      console.log(commitRes )

    }

    export async function createBuyOrder(orderData) {
      console.log(orderData)
      const newOrderDoc = await addDoc(collection(db, "orders"), orderData)
      return newOrderDoc.id
      
    }


  export default asyncData