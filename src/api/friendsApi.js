export function getFriendsListFromAPI() {
    console.log('getFriendsListFromApi');

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                [
                    {
                        id: 1,
                        name: 'Abraham Lincoln',
                        avatar: "https://media.licdn.com/dms/image/C4E03AQE0b8qSdSr8UA/profile-displayphoto-shrink_100_100/0?e=1553126400&v=beta&t=rPNOIxuS0IyaOdt4W5Ft9s-f5fxrwyeSvk4Iv_SXTL0"
                    },
                    {
                        id: 2,
                        name: 'George Washington',
                        avatar: "https://media.licdn.com/dms/image/C4E03AQE0b8qSdSr8UA/profile-displayphoto-shrink_100_100/0?e=1553126400&v=beta&t=rPNOIxuS0IyaOdt4W5Ft9s-f5fxrwyeSvk4Iv_SXTL0"
                    },
                    {
                        id: 3,
                        name: 'Theodore Roosevelt',
                        avatar: "https://media.licdn.com/dms/image/C4E03AQE0b8qSdSr8UA/profile-displayphoto-shrink_100_100/0?e=1553126400&v=beta&t=rPNOIxuS0IyaOdt4W5Ft9s-f5fxrwyeSvk4Iv_SXTL0"
                    },
                    {
                        id: 4,
                        name: 'Kerem Suer',
                        avatar: "https://media.licdn.com/dms/image/C4E03AQE0b8qSdSr8UA/profile-displayphoto-shrink_100_100/0?e=1553126400&v=beta&t=rPNOIxuS0IyaOdt4W5Ft9s-f5fxrwyeSvk4Iv_SXTL0"
                    },
                    {
                        id: 5,
                        name: 'Raquel Parrado',
                        avatar: "https://media.licdn.com/dms/image/C4E03AQE0b8qSdSr8UA/profile-displayphoto-shrink_100_100/0?e=1553126400&v=beta&t=rPNOIxuS0IyaOdt4W5Ft9s-f5fxrwyeSvk4Iv_SXTL0"
                    }
                ])
        }, 3000);

    });
}
;
