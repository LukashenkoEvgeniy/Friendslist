export function getFriendsListFromAPI() {
    console.log('getFriendsListFromApi');

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                [
                    {
                        id: 1,
                        name: 'Abraham Lincoln',
                        avatar: "https://source.unsplash.com/random"
                    },
                    {
                        id: 2,
                        name: 'George Washington',
                        avatar: "https://source.unsplash.com/random"
                    },
                    {
                        id: 3,
                        name: 'Theodore Roosevelt',
                        avatar: "https://source.unsplash.com/random"
                    },
                    {
                        id: 4,
                        name: 'Kerem Suer',
                        avatar: "https://source.unsplash.com/random"
                    },
                    {
                        id: 5,
                        name: 'Raquel Parrado',
                        avatar: "https://source.unsplash.com/random"
                    }
                ])
        }, 3000);

    });
}
;
