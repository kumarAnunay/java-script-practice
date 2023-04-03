// Callbacks
function getVideoDetails(videos, callback) {
    // Network Call to the backend with videos
    setTimeout(() => {
      callback({ id: 1, title: "Hey Jack!", duration: 10 });
    }, 1500);
  }
  
  function getUserVideos(email, callback, errorCallback) {
    // Network Call to the backend with email
    setTimeout(() => {
      callback(["video1", "video2", "video3"]);
    }, 1500);
  }
  
  function loginUser(email, password, successCallback, errorCallback) {
    // Network Call to the backend with email and password
    setTimeout(() => {
      let error = true;
      if (error) {
        errorCallback("Network call Unsuccessful!");
      } else {
        success({ userEmail: email });
      }
    }, 1500);
  }
  
  loginUser(
    "david@gmail.com",
    12345,
    (userObject) => {
      getUserVideos(
        userObject.email,
        (videos) => {
          getVideoDetails(
            videos,
            () => {
              console.log(videos);
            },
            () => {
              console.log("Error");
            }
          );
        },
        (error) => {
          console.log("Error");
        }
      );
    },
    (error) => {
      console.log("Error");
    }
  );