import harryPotterImg from "../assets/novels-img/harry-potter.jpg";
import hobbitImg from "../assets/novels-img/hobbit.jpg";
import sherlockImg from "../assets/novels-img/sherlock.jpg";
import duneImg from"../assets/novels-img/Dune.jpg";

const novels = [  
    {  
        id: 1,  
        title: "Harry Potter and the Philosopher's Stone",  
        author: "J. K. Rowling",  
        type: "Fantasy",  
        description: "A young wizard discovers his magical heritage",  
        image: "https://images-na.ssl-images-amazon.com/images/P/0747532699.01.LZZZZZZZ.jpg" 
    },  
    {  
        id: 2,  
        title: "The Hobbit",  
        author: "J. R. R. Tolkien",  
        type: "Fantasy",  
        description: "Adventure of Bilbo Baggins",  
        image: "https://covers.openlibrary.org/b/id/7725284-M.jpg"  
    },  
    {  
        id: 3,  
        title: "Sherlock Holmes: A Study in Scarlet",  
        author: "Arthur Conan Doyle",  
        type: "Mystery",  
        description: "The first adventure of the famous detective",  
        image: "https://covers.openlibrary.org/b/id/7725304-M.jpg"  
    },  
    {  
        id: 4,  
        title: "Dune",  
        author: "Frank Herbert",  
        type: "Science Fiction",  
        description: "Epic science fiction on a desert planet",  
        image: "https://covers.openlibrary.org/b/id/7725324-M.jpg"  
    },  
    {  
        id: 5,  
        title: "To Kill a Mockingbird",  
        author: "Harper Lee",  
        type: "Drama",  
        description: "A classic tale of racial injustice",  
        image: "https://covers.openlibrary.org/b/id/7725344-M.jpg"  
    },  
    {  
        id: 6,  
        title: "1984",  
        author: "George Orwell",  
        type: "Science Fiction",  
        description: "A dystopian novel about totalitarianism",  
        image: "https://covers.openlibrary.org/b/id/7725364-M.jpg"  
    },  
    {  
        id: 7,  
        title: "Pride and Prejudice",  
        author: "Jane Austen",  
        type: "Romance",  
        description: "A story of love and social class",  
        image: "https://covers.openlibrary.org/b/id/7725384-M.jpg"  
    },  
    {  
        id: 8,  
        title: "The Great Gatsby",  
        author: "F. Scott Fitzgerald",  
        type: "Classic",  
        description: "The American Dream in the Jazz Age",  
        image: "https://covers.openlibrary.org/b/id/7725404-M.jpg"  
    },  
    {  
        id: 9,  
        title: "Jane Eyre",  
        author: "Charlotte Brontë",  
        type: "Romance",  
        description: "A powerful story of love and independence",  
        image: "https://covers.openlibrary.org/b/id/7725424-M.jpg"  
    },  
    {  
        id: 10,  
        title: "Wuthering Heights",  
        author: "Emily Brontë",  
        type: "Drama",  
        description: "A tale of passion and revenge",  
        image: "https://covers.openlibrary.org/b/id/7725444-M.jpg"  
    },  
    {  
        id: 11,  
        title: "The Catcher in the Rye",  
        author: "J. D. Salinger",  
        type: "Classic",  
        description: "A teenager's journey through New York",  
        image: "https://covers.openlibrary.org/b/id/7725464-M.jpg"  
    },  
    {  
        id: 12,  
        title: "Moby-Dick",  
        author: "Herman Melville",  
        type: "Adventure",  
        description: "The obsessive hunt for a white whale",  
        image: "https://covers.openlibrary.org/b/id/7725484-M.jpg"  
    },  
    {  
        id: 13,  
        title: "The Lord of the Rings",  
        author: "J. R. R. Tolkien",  
        type: "Fantasy",  
        description: "An epic quest to destroy a powerful ring",  
        image: "https://covers.openlibrary.org/b/id/7725504-M.jpg"  
    },  
    {  
        id: 14,  
        title: "The Chronicles of Narnia",  
        author: "C. S. Lewis",  
        type: "Fantasy",  
        description: "Children discover a magical world",  
        image: "https://covers.openlibrary.org/b/id/7725524-M.jpg"  
    },  
    {  
        id: 15,  
        title: "Brave New World",  
        author: "Aldous Huxley",  
        type: "Science Fiction",  
        description: "A futuristic dystopian society",  
        image: "https://covers.openlibrary.org/b/id/7725544-M.jpg"  
    },  
    {  
        id: 16,  
        title: "The Count of Monte Cristo",  
        author: "Alexandre Dumas",  
        type: "Adventure",  
        description: "A tale of revenge and redemption",  
        image: "https://covers.openlibrary.org/b/id/7725564-M.jpg"  
    },  
    {  
        id: 17,  
        title: "Oliver Twist",  
        author: "Charles Dickens",  
        type: "Drama",  
        description: "The life of an orphan boy",  
        image: "https://covers.openlibrary.org/b/id/7725584-M.jpg"  
    },  
    {  
        id: 18,  
        title: "Great Expectations",  
        author: "Charles Dickens",  
        type: "Drama",  
        description: "A young boy's journey to adulthood",  
        image: "https://covers.openlibrary.org/b/id/7725604-M.jpg"  
    },  
    {  
        id: 19,  
        title: "A Tale of Two Cities",  
        author: "Charles Dickens",  
        type: "Historical",  
        description: "A story of love during the French Revolution",  
        image: "https://covers.openlibrary.org/b/id/7725624-M.jpg"  
    },  
    {  
        id: 20,  
        title: "The Three Musketeers",  
        author: "Alexandre Dumas",  
        type: "Adventure",  
        description: "Four friends and their adventures",  
        image: "https://covers.openlibrary.org/b/id/7725644-M.jpg"  
    },  
    {  
        id: 21,  
        title: "Les Misérables",  
        author: "Victor Hugo",  
        type: "Historical",  
        description: "A story of redemption and justice",  
        image: "https://covers.openlibrary.org/b/id/7725664-M.jpg"  
    },  
    {  
        id: 22,  
        title: "The Hunchback of Notre-Dame",  
        author: "Victor Hugo",  
        type: "Drama",  
        description: "A tragic tale in medieval Paris",  
        image: "https://covers.openlibrary.org/b/id/7725684-M.jpg"  
    },  
    {  
        id: 23,  
        title: "Jane Austen's Emma",  
        author: "Jane Austen",  
        type: "Romance",  
        description: "A wealthy girl's matchmaking adventures",  
        image: "https://covers.openlibrary.org/b/id/7725704-M.jpg"  
    },  
    {  
        id: 24,  
        title: "Sense and Sensibility",  
        author: "Jane Austen",  
        type: "Romance",  
        description: "Two sisters and their contrasting personalities",  
        image: "https://covers.openlibrary.org/b/id/7725724-M.jpg"  
    },  
    {  
        id: 25,  
        title: "The Picture of Dorian Gray",  
        author: "Oscar Wilde",  
        type: "Fantasy",  
        description: "A man's portrait ages while he stays young",  
        image: "https://covers.openlibrary.org/b/id/7725744-M.jpg"  
    },  
    {  
        id: 26,  
        title: "The Importance of Being Earnest",  
        author: "Oscar Wilde",  
        type: "Comedy",  
        description: "A witty play about identity",  
        image: "https://covers.openlibrary.org/b/id/7725764-M.jpg"  
    },  
    {  
        id: 27,  
        title: "Dracula",  
        author: "Bram Stoker",  
        type: "Horror",  
        description: "A classic vampire novel",  
        image: "https://covers.openlibrary.org/b/id/7725784-M.jpg"  
    },  
    {  
        id: 28,  
        title: "Frankenstein",  
        author: "Mary Shelley",  
        type: "Horror",  
        description: "A scientist creates a monster",  
        image: "https://covers.openlibrary.org/b/id/7725804-M.jpg"  
    },  
    {  
        id: 29,  
        title: "The Strange Case of Dr. Jekyll and Mr. Hyde",  
        author: "Robert Louis Stevenson",  
        type: "Horror",  
        description: "A tale of duality and darkness",  
        image: "https://covers.openlibrary.org/b/id/7725824-M.jpg"  
    },  
    {  
        id: 30,  
        title: "Treasure Island",  
        author: "Robert Louis Stevenson",  
        type: "Adventure",  
        description: "A classic pirate adventure",  
        image: "https://covers.openlibrary.org/b/id/7725844-M.jpg"  
    },  
    {  
        id: 31,  
        title: "The Island of Doctor Moreau",  
        author: "H. G. Wells",  
        type: "Science Fiction",  
        description: "A scientist's twisted experiments",  
        image: "https://covers.openlibrary.org/b/id/7725864-M.jpg"  
    },  
    {  
        id: 32,  
        title: "The Time Machine",  
        author: "H. G. Wells",  
        type: "Science Fiction",  
        description: "A man travels through time",  
        image: "https://covers.openlibrary.org/b/id/7725884-M.jpg"  
    },  
    {  
        id: 33,  
        title: "The Invisible Man",  
        author: "H. G. Wells",  
        type: "Science Fiction",  
        description: "A scientist becomes invisible",  
        image: "https://covers.openlibrary.org/b/id/7725904-M.jpg"  
    },  
    {  
        id: 34,  
        title: "The War of the Worlds",  
        author: "H. G. Wells",  
        type: "Science Fiction",  
        description: "An alien invasion of Earth",  
        image: "https://covers.openlibrary.org/b/id/7725924-M.jpg"  
    },  
    {  
        id: 35,  
        title: "Robinson Crusoe",  
        author: "Daniel Defoe",  
        type: "Adventure",  
        description: "A man survives on a desert island",  
        image: "https://covers.openlibrary.org/b/id/7725944-M.jpg"  
    },  
    {  
        id: 36,  
        title: "Gulliver's Travels",  
        author: "Jonathan Swift",  
        type: "Adventure",  
        description: "A traveler visits fantastic lands",  
        image: "https://covers.openlibrary.org/b/id/7725964-M.jpg"  
    },  
    {  
        id: 37,  
        title: "Alice's Adventures in Wonderland",  
        author: "Lewis Carroll",  
        type: "Fantasy",  
        description: "A girl's surreal journey underground",  
        image: "https://covers.openlibrary.org/b/id/7725984-M.jpg"  
    },  
    {  
        id: 38,  
        title: "Through the Looking Glass",  
        author: "Lewis Carroll",  
        type: "Fantasy",  
        description: "Alice's adventure through a mirror",  
        image: "https://covers.openlibrary.org/b/id/7726004-M.jpg"  
    },  
    {  
        id: 39,  
        title: "The Jungle Book",  
        author: "Rudyard Kipling",  
        type: "Adventure",  
        description: "A boy raised by animals",  
        image: "https://covers.openlibrary.org/b/id/7726024-M.jpg"  
    },  
    {  
        id: 40,  
        title: "Kim",  
        author: "Rudyard Kipling",  
        type: "Adventure",  
        description: "An orphan boy's adventures in India",  
        image: "https://covers.openlibrary.org/b/id/7726044-M.jpg"  
    },  
    {  
        id: 41,  
        title: "The Call of the Wild",  
        author: "Jack London",  
        type: "Adventure",  
        description: "A dog's life in the Yukon",  
        image: "https://covers.openlibrary.org/b/id/7726064-M.jpg"  
    },  
    {  
        id: 42,  
        title: "White Fang",  
        author: "Jack London",  
        type: "Adventure",  
        description: "A wolf-dog's journey to domestication",  
        image: "https://covers.openlibrary.org/b/id/7726084-M.jpg"  
    },  
    {  
        id: 43,  
        title: "Anna Karenina",  
        author: "Leo Tolstoy",  
        type: "Drama",  
        description: "A tragic love story in Russian society",  
        image: "https://covers.openlibrary.org/b/id/7726104-M.jpg"  
    },  
    {  
        id: 44,  
        title: "War and Peace",  
        author: "Leo Tolstoy",  
        type: "Historical",  
        description: "An epic novel of war and society",  
        image: "https://covers.openlibrary.org/b/id/7726124-M.jpg"  
    },  
    {  
        id: 45,  
        title: "Crime and Punishment",  
        author: "Fyodor Dostoevsky",  
        type: "Drama",  
        description: "A man commits murder and faces consequences",  
        image: "https://covers.openlibrary.org/b/id/7726144-M.jpg"  
    },  
    {  
        id: 46,  
        title: "The Brothers Karamazov",  
        author: "Fyodor Dostoevsky",  
        type: "Drama",  
        description: "Three brothers and their philosophical conflicts",  
        image: "https://covers.openlibrary.org/b/id/7726164-M.jpg"  
    },  
    {  
        id: 47,  
        title: "Demons",  
        author: "Fyodor Dostoevsky",  
        type: "Drama",  
        description: "A political novel of revolution",  
        image: "https://covers.openlibrary.org/b/id/7726184-M.jpg"  
    },  
    {  
        id: 48,  
        title: "The Idiot",  
        author: "Fyodor Dostoevsky",  
        type: "Drama",  
        description: "A man returns from exile to a corrupt society",  
        image: "https://covers.openlibrary.org/b/id/7726204-M.jpg"  
    },  
    {  
        id: 49,  
        title: "Dead Souls",  
        author: "Nikolai Gogol",  
        type: "Satire",  
        description: "A satirical tale of Russian corruption",  
        image: "https://covers.openlibrary.org/b/id/7726224-M.jpg"  
    },  
    {  
        id: 50,  
        title: "The Master and Margarita",  
        author: "Mikhail Bulgakov",  
        type: "Fantasy",  
        description: "A magical tale set in Soviet Moscow",  
        image: "https://covers.openlibrary.org/b/id/7726244-M.jpg"  
    },  
    {  
        id: 51,  
        title: "One Hundred Years of Solitude",  
        author: "Gabriel García Márquez",  
        type: "Fantasy",  
        description: "A family's saga across generations",  
        image: "https://covers.openlibrary.org/b/id/7726264-M.jpg"  
    },  
    {  
        id: 52,  
        title: "Love in the Time of Cholera",  
        author: "Gabriel García Márquez",  
        type: "Romance",  
        description: "A love story spanning decades",  
        image: "https://covers.openlibrary.org/b/id/7726284-M.jpg"  
    },  
    {  
        id: 53,  
        title: "The House of the Spirits",  
        author: "Isabel Allende",  
        type: "Fantasy",  
        description: "A family saga with magical realism",  
        image: "https://covers.openlibrary.org/b/id/7726304-M.jpg"  
    },  
    {  
        id: 54,  
        title: "Laure Ingalls Wilder's Little House on the Prairie",  
        author: "Laura Ingalls Wilder",  
        type: "Classic",  
        description: "Pioneer life in America",  
        image: "https://covers.openlibrary.org/b/id/7726324-M.jpg"  
    },  
    {  
        id: 55,  
        title: "The Awakening",  
        author: "Kate Chopin",  
        type: "Drama",  
        description: "A woman's journey of self-discovery",  
        image: "https://covers.openlibrary.org/b/id/7726344-M.jpg"  
    },  
    {  
        id: 56,  
        title: "The Scarlet Letter",  
        author: "Nathaniel Hawthorne",  
        type: "Drama",  
        description: "A tale of sin and redemption",  
        image: "https://covers.openlibrary.org/b/id/7726364-M.jpg"  
    },  
    {  
        id: 57,  
        title: "The House of Mirth",  
        author: "Edith Wharton",  
        type: "Drama",  
        description: "A woman navigates New York society",  
        image: "https://covers.openlibrary.org/b/id/7726384-M.jpg"  
    },  
    {  
        id: 58,  
        title: "Ethan Frome",  
        author: "Edith Wharton",  
        type: "Drama",  
        description: "A tragic love story in rural New England",  
        image: "https://covers.openlibrary.org/b/id/7726404-M.jpg"  
    },  
    {  
        id: 59,  
        title: "The Age of Innocence",  
        author: "Edith Wharton",  
        type: "Romance",  
        description: "High society romance and duty",  
        image: "https://covers.openlibrary.org/b/id/7726424-M.jpg"  
    },  
    {  
        id: 60,  
        title: "Uncle Tom's Cabin",  
        author: "Harriet Beecher Stowe",  
        type: "Drama",  
        description: "A powerful tale against slavery",  
        image: "https://covers.openlibrary.org/b/id/7726444-M.jpg"  
    },  
    {  
        id: 61,  
        title: "The Grapes of Wrath",  
        author: "John Steinbeck",  
        type: "Drama",  
        description: "A family's struggle during the Great Depression",  
        image: "https://covers.openlibrary.org/b/id/7726464-M.jpg"  
    },  
    {  
        id: 62,  
        title: "Of Mice and Men",  
        author: "John Steinbeck",  
        type: "Drama",  
        description: "Two workers pursuing their dreams",  
        image: "https://covers.openlibrary.org/b/id/7726484-M.jpg"  
    },  
    {  
        id: 63,  
        title: "East of Eden",  
        author: "John Steinbeck",  
        type: "Drama",  
        description: "An epic saga of good and evil",  
        image: "https://covers.openlibrary.org/b/id/7726504-M.jpg"  
    },  
    {  
        id: 64,  
        title: "The Sun Also Rises",  
        author: "Ernest Hemingway",  
        type: "Classic",  
        description: "Lost generation in post-war Europe",  
        image: "https://covers.openlibrary.org/b/id/7726524-M.jpg"  
    },  
    {  
        id: 65,  
        title: "A Farewell to Arms",  
        author: "Ernest Hemingway",  
        type: "War",  
        description: "Love during World War I",  
        image: "https://covers.openlibrary.org/b/id/7726544-M.jpg"  
    },  
    {  
        id: 66,  
        title: "The Old Man and the Sea",  
        author: "Ernest Hemingway",  
        type: "Adventure",  
        description: "An old fisherman's struggle",  
        image: "https://covers.openlibrary.org/b/id/7726564-M.jpg"  
    },  
    {  
        id: 67,  
        title: "For Whom the Bell Tolls",  
        author: "Ernest Hemingway",  
        type: "War",  
        description: "An American volunteer in the Spanish Civil War",  
        image: "https://covers.openlibrary.org/b/id/7726584-M.jpg"  
    },  
    {  
        id: 68,  
        title: "The Great Ziegfeld",  
        author: "F. Scott Fitzgerald",  
        type: "Classic",  
        description: "Dreams in the Jazz Age",  
        image: "https://covers.openlibrary.org/b/id/7726604-M.jpg"  
    },  
    {  
        id: 69,  
        title: "Tender Is the Night",  
        author: "F. Scott Fitzgerald",  
        type: "Drama",  
        description: "Wealth and moral decay on the Riviera",  
        image: "https://covers.openlibrary.org/b/id/7726624-M.jpg"  
    },  
    {  
        id: 70,  
        title: "The Beautiful and Damned",  
        author: "F. Scott Fitzgerald",  
        type: "Classic",  
        description: "A couple's moral decline",  
        image: "https://covers.openlibrary.org/b/id/7726644-M.jpg"  
    },  
    {  
        id: 71,  
        title: "This Side of Paradise",  
        author: "F. Scott Fitzgerald",  
        type: "Classic",  
        description: "A young man's search for success",  
        image: "https://covers.openlibrary.org/b/id/7726664-M.jpg"  
    },  
    {  
        id: 72,  
        title: "Invisible Man",  
        author: "Ralph Ellison",  
        type: "Drama",  
        description: "An African American's struggle for identity",  
        image: "https://covers.openlibrary.org/b/id/7726684-M.jpg"  
    },  
    {  
        id: 73,  
        title: "Beloved",  
        author: "Toni Morrison",  
        type: "Drama",  
        description: "A haunting tale of slavery's impact",  
        image: "https://covers.openlibrary.org/b/id/7726704-M.jpg"  
    },  
    {  
        id: 74,  
        title: "Song of Solomon",  
        author: "Toni Morrison",  
        type: "Drama",  
        description: "A family's journey through African American history",  
        image: "https://covers.openlibrary.org/b/id/7726804-M.jpg"  
    },  
    {  
        id: 75,  
        title: "The Bluest Eye",  
        author: "Toni Morrison",  
        type: "Drama",  
        description: "A young girl's struggle with identity",  
        image: "https://covers.openlibrary.org/b/id/7726744-M.jpg"  
    },  
    {  
        id: 76,  
        title: "Sula",  
        author: "Toni Morrison",  
        type: "Drama",  
        description: "The friendship of two women",  
        image: "https://covers.openlibrary.org/b/id/7726764-M.jpg"  
    },  
    {  
        id: 77,  
        title: "The Handmaid's Tale",  
        author: "Margaret Atwood",  
        type: "Science Fiction",  
        description: "A dystopian future for women",  
        image: "https://covers.openlibrary.org/b/id/7726784-M.jpg"  
    },  
    {  
        id: 78,  
        title: "Oryx and Crake",  
        author: "Margaret Atwood",  
        type: "Science Fiction",  
        description: "A post-apocalyptic world",  
        image: "https://covers.openlibrary.org/b/id/7726804-M.jpg"  
    },  
    {  
        id: 79,  
        title: "The Blind Assassin",  
        author: "Margaret Atwood",  
        type: "Mystery",  
        description: "A complex tale of secrets and lies",  
        image: "https://covers.openlibrary.org/b/id/7726824-M.jpg"  
    },  
    {  
        id: 80,  
        title: "Catch-22",  
        author: "Joseph Heller",  
        type: "Satire",  
        description: "A complex tale of secrets and lies",
    }]
    export default novels;



    /*[
    {
        id: 1,
        title: "Harry Potter",
        author: "J. K. Rowling",
        type: "Fantasy",
        description: "A world full of magic",
        image: harryPotterImg,
    },

    {
        id: 2,
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        type: "Fantasy",
        description: "Adventure of Bilbo",
        image: hobbitImg,
    },

    {
        id: 3,
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        type: "Mystery",
        description: "Detective stories",
        image: sherlockImg,
    },
    {
        id: 4,
        title: "Dune",
        author: "Frank Herbert",
        type: "Science Fiction",
        description: "Epic science fiction novel",
        image: duneImg
    },
    ];*/