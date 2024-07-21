
const games = [
    { id: '1', title: 'The Legend of Zelda', platform: ['Nintendo Switch'] },
    { id: '2', title: 'God of War', platform: ['PlayStation 4'] },
    { id: '3', title: 'Minecraft', platform: ['PC', 'Xbox One', 'PlayStation 4'] },
    { id: '4', title: 'Cyberpunk 2077', platform: ['PC', 'PlayStation 4', 'Xbox One'] },
    { id: '5', title: 'The Witcher 3', platform: ['PC', 'PlayStation 4', 'Xbox One'] }
];

const authors = [
    { id: '1', name: 'John Doe', verified: true },
    { id: '2', name: 'Jane Smith', verified: false },
    { id: '3', name: 'Alice Johnson', verified: true }
];

const reviews = [
    { id: '1', rating: 5, authorId:'1', gameId:'2', content: 'Amazing game!' },
    { id: '2', rating: 4, authorId:'2', gameId:'1', content: 'Really enjoyed it.' },
    { id: '3', rating: 3, authorId:'3', gameId:'4', content: 'It was okay.' },
    { id: '4', rating: 2, authorId:'3', gameId:'5', content: 'Not my cup of tea.' },
    { id: '5', rating: 1, authorId:'2', gameId:'3', content: 'Terrible experience.' },
    { id: '6', rating: 5, authorId:'1', gameId:'1', content: 'Absolutely loved it!' },
    { id: '7', rating: 4, authorId:'1', gameId:'2', content: 'Great game, would recommend.' },
    { id: '8', rating: 3, authorId:'3', gameId:'4', content: 'Average gameplay.' },
    { id: '9', rating: 2, authorId:'1', gameId:'3', content: 'Could have been better.' },
    { id: '10', rating: 1, authorId:'2', gameId:'5', content: 'Not worth the money.' }          
];

export default {games,authors,reviews}
