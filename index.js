import { ApolloServer } from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"
import { typeDefs } from "./schema.js"
import db from "./db.js"

const resolvers = {
    Query: {
        games(){
           return db.games
        },
        game(_,args){
            return db.games.find((game)=> game.id===args.id)
        },
        reviews(){
            return db.reviews
        },
        review(_,args){
            return db.reviews.find((review)=> review.id===args.id)
        },
        authors(){
            return db.authors
        },
        author(_,args){
            return db.authors.find((author)=> author.id===args.id)
        },
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter(r => r.gameId === parent.id);
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(r => r.authorId === parent.id);
        }
    },
    Review:{
        author(parent){
            return db.authors.find( a=> a.id === parent.authorId);
        },
        game(parent){
            return db.games.find( g=> g.id === parent.gameId);
        }
    },
    Mutation:{
        deleteGame(_,args){
            return db.games.filter((g)=> g.id!=args.id)
        },
        addGame(_, args) {
            let newGame = {
                id: Math.floor(Math.random() * 10000).toString(),
                ...args.game,
            };
            db.games.push(newGame);
            return newGame;
        },
        updateGame(_, args) {
            let updatedGame;
            db.games = db.games.map(g => {
                if (g.id === args.id) {
                    updatedGame = { ...g, ...args.edits };
                    return updatedGame;
                }
                return g;
            });
            return updatedGame;
        },
    }
}
/*
    games{
        title
    } ===> these type of query with specific fields is handled by Apollo Server
*/
//server setup
const server = new ApolloServer({

    //1.typeDefs : Definition of type of data
    typeDefs,
    //2.resolvers : Acts as db handler to resolve and populate schema
    resolvers
})

const {url} = await startStandaloneServer(server,{
    listen:{port:4000}
})

console.log('Server is running successfully',4000)