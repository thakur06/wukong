// A Promise that randomly resolves or rejects
const myPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Randomly resolve or reject
  
    if (success) {
      resolve('The operation was successful!');
    } else {
      reject('The operation failed!');
    }
  });
  
  // Handling the Promise using .then() for success and .catch() for failure
  myPromise
    .then(result => {
      console.log('Resolved:', result);  // If Promise resolves
    })
    .catch(error => {
      console.log('Rejected:', error);  // If Promise rejects
    });
  