export const submitData = async (e, addDoc, collection, db) => {
  e.preventDefault();

  const fromData = new FormData(e.target);

  try {
    const docRef = await addDoc(collection(db, 'reports'), {
      date: new Date(),
      name: fromData.get('name'),
      work: fromData.get('work'),
      comment: fromData.get('comment')
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}