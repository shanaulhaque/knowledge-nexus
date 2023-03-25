import { db } from '../../conn/firebase/firebase-config'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'

const articleDBName = "Article";

export const getAllArticles = async () => {
    const articleColletionRef = collection(db, articleDBName);
    const response =  await getDocs(articleColletionRef);
    const articles = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log("Articles : " + articles);
    return articles;
};


export const getArticleById = async (id) => {
    const articleColletionRef = doc(db, articleDBName, id);
    const response =  await getDoc(articleColletionRef);
    const article = response.data();
    console.log("Articles : " + article);
    return article;
};
