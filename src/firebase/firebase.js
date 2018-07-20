import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 934820
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Vue'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (error) => {
//     console.log('Error with data fetching', error);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(22);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(24);
// }, 10500);

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {});

// database
//   .ref()
//   .set({
//     name: 'Khanh Tran',
//     age: 24,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Reston',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch((error) => {
//     console.log('This failed.', error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((error) => {
//     console.log('Did not remove data', e);
//   });
