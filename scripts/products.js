const products = [
    {
        id:1,
        image:"../images/product/the-women-of-chateau-lafayette.jpg",
        title:"The Women of Chateau Lafayette",
        author:"Stephanie Dray",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary: "An epic saga from New York Times bestselling author Stephanie Dray based on the true story of an extraordinary castle in the heart of France and the remarkable women bound by its legacy."
    },
    {
        id:2,
        image:"../images/product/one-hundred-years-of-lenni-and-margot.jpg",
        title:"One Hundred Years of Lenni and Margot",
        author:"Marianne Cronin",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary: "Life is short. No-one knows that better than seventeen year old Lenni living on the terminal ward. But as she is about to learn, it’s not only what you make of life that matters, but who you share it with."
    },
    {
        id:3,
        image:"../images/product/the-lord-of-the-rings.jpg",
        title:"The Lord of the Rings",
        author:"J.R.R. Tolkien,Ian Holm,John Le Mesurier,Michael Hordern,Peter Woodthorpe,Robert Stephens",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary:"All three parts of the epic masterpiece The Lord of the Rings – The Fellowship of the Ring, The Two Towers & The Return of the King – available as one download, featuring the definitive edition of the text, hyperlinked footnotes and page references, and 3 maps including a detailed map of Middle-earth."
    },
    {
        id:4,
        image:"../images/product/the-man-who-died-twice.jpg",
        title:"The Man Who Died Twice",
        author:"Richard Osman",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary:"Elizabeth has received a letter from an old colleague, a man with whom she has a long history. He's made a big mistake, and he needs her help. His story involves stolen diamonds, a violent mobster, and a very real threat to his life."
    },
    {
        id:5,
        image:"../images/product/the-paris-library.jpg",
        title:"The Paris Library",
        author:"Janet Skeslien Charles",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary:"Based on the true World War II story of the heroic librarians at the American Library in Paris, this is an unforgettable story of romance, friendship, family, and the power of literature to bring us together, perfect for fans of The Lilac Girls and The Paris Wife."
    },
    {
        id:6,
        image:"../images/product/She-Who-Became-the-Sun.jpg",
        title:"She Who Became the Sun",
        author:"Shelley Parker-Chan",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary:"Mulan meets The Song of Achilles; an accomplished, poetic debut of war and destiny, sweeping across an epic alternate China. In a famine-stricken village on a dusty yellow plain, two children are given two fates. A boy, greatness. A girl, nothingness…"
    },
    {
        id:7,
        image:"../images/product/Christmas-Pig.jpg",
        title:"Christmas Pig",
        author:"J. K. Rowling,Jim Field",
        rental: 5,
        deposit: 60,
        genre:"fiction",
        summary:"One boy and his toy are about to change everything…Jack loves his childhood toy, Dur Pig. DP has always been there for him, through good and bad. Until one Christmas Eve, something terrible happens – DP is lost. But Christmas Eve is a night for miracles and lost causes, a night when all things can come to life… even toys. "
    },
    {
        id:8,
        image:"../images/product/Girl-in-the-Walls.jpg",
        title:"Girl in the Walls",
        author:"A. J. Gnuse",
        rental: 5,
        deposit: 40,
        genre:"fiction",
        summary:"A mesmerizing and suspenseful coming-of-age novel about an orphan hiding within the walls of her former family home—and about what it means to be truly seen after becoming lost in life.Eventually, every hidden thing is found."
    },
    {
        id:9,
        image:"../images/product/Loch-Down-Abbey.jpg",
        title:"Loch Down Abbey",
        author:"Beth Cowan-Erskine",
        rental: 5,
        deposit: 40,
        genre:"fiction",
        summary:"It’s the 1930s and a mysterious illness is spreading over Scotland. But the noble and ancient family of Inverkillen, residents of Loch Down Abbey, are much more concerned with dwindling toilet roll supplies and who will look after the children now that Nanny has regretfully (and most inconveniently) departed this life."
    },
    {
        id:10,
        image:"../images/product/The-Dictionary-of-Lost-Words.jpg",
        title:"The Dictionary of Lost Words",
        author:"Pip Williams",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary:"Esme is born into a world of words. Motherless and irrepressibly curious, she spends her childhood in the ‘Scriptorium’, a garden shed in Oxford where her father and a team of dedicated lexicographers are collecting words for the very first Oxford English Dictionary. Esme’s place is beneath the sorting table, unseen and unheard. One day a slip of paper containing the word ‘bondmaid’ flutters to the floor."
    },
    {
        id:11,
        image:"../images/product/The-Shadow-Of-The-Wind.jpg",
        title:"The Shadow Of The Wind",
        author:"Carlos Ruiz Zafón",
        rental: 5,
        deposit: 20,
        genre:"fiction",
        summary:"THE MODERN CLASSIC: OVER 20 MILLION COPIES SOLDA Sunday Times bestseller and a Richard & Judy book club pick’The real deal: one gorgeous read’ Stephen King’This book will change your life. An instant classic’ Daily Telegraph’A book lover’s dream’ The Times Hidden in the heart of the old city of Barcelona is the ‘Cemetery of Lost Books’, a labyrinthine library of obscure and forgotten titles that have long gone out of print."
    },
    {
        id:12,
        image:"../images/product/Love-Hypothesis.jpg",
        title:"Love Hypothesis",
        author:"Ali Hazelwood",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary:"Based on the available information and the data hitherto collected, my hypothesis is that the further I stay away from love, the better off I will be.’Contemporary romance’s unicorn: the elusive marriage of deeply brainy and delightfully escapist."
    },
    {
        id:13,
        image:"../images/product/A-burning.jpg",
        title:"A burning",
        author:"Megha Majumdar",
        rental: 5,
        deposit: 40,
        genre:"fiction",
        summary:"For readers of Tommy Orange, Yaa Gyasi, and Jhumpa Lahiri, an electrifying debut novel about three unforgettable characters who seek to rise—to the middle class, to political power, to fame in the movies—and find their lives entangled in the wake of a catastrophe in contemporary India."
    },
    {
        id:14,
        image:"../images/product/A-Certain-Justice.jpeg",
        title:"A-Certain-Justice",
        author:"P. D. Jamesr",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary:"It begins, dramatically enough, with a trial for murder. The distinguished criminal lawyer Venetia Aldridge is defending Garry Ashe on charges of having brutally killed his aunt. For Aldridge the trial is mainly a test of her courtroom skills, one more opportunity to succeed – and she does."
    },
    {
        id:15,
        image:"../images/product/The-Mystery-of-Mrs.-Christie.jpg",
        title:"The Mystery of Mrs. Christie",
        author:"Marie Benedict",
        rental: 5,
        deposit: 40,
        genre:"fiction",
        summary:"“A deft, fascinating page-turner replete with richly drawn characters and plot twists that would stump Hercule Poirot.” –Kate Quinn, New York Times bestselling author of The Alice Network, The Huntress, and The Rose CodeThe New York Times and USA Today bestselling author of The Only Woman in the Room..."
    },
    {
        id:16,
        image:"../images/product/Mystery-of-Three-Quarters.jpg",
        title:"Mystery of Three Quarters",
        author:"Sophie Hannah",
        rental: 5,
        deposit: 20,
        genre:"fiction",
        summary:"The world’s most beloved detective, Hercule Poirot, the legendary star of Agatha Christie’s Murder on the Orient Expressand most recently The Monogram Murders and Closed Casket, returns in a stylish, diabolically clever mystery set in the London of 1930."
    },
    {
        id:17,
        image:"../images/product/case-of-the-deadly-butter-chicken.jpg",
        title:"Case of the Deadly Butter Chicken",
        author:"Tarquin Hall",
        rental: 5,
        deposit: 20,
        genre:"fiction",
        summary:"Vish Puri is as fond of butter chicken as the next Punjabi. So when it’s served at the Delhi Durbar hotel at an India Premier League cricket match dinner, he’s the first to tuck in. Faheem Khan, father of Pakistani star cricketer Kamran Khan, can’t resist either. But the creamy dish proves his undoing. After a few mouthfuls, he collapses on the floor, dead…"
    },
    {
        id:18,
        image:"../images/product/case-of-the-missing-servant.jpg",
        title:"Case of the Missing Servant",
        author:"Tarquin Hall",
        rental: 5,
        deposit: 20,
        genre:"fiction",
        summary:"The portly Vish Puri is India’s most accomplished detective, at least in his own estimation, and is also the hero of an irresistible new mystery series set in hot, dusty Delhi. Puri’s detective skills are old-fashioned in a Sherlock Holmesian way and a little out of sync with the tempo of the modern city, but Puri is clever and his methods work."
    },
    {
        id:19,
        image:"../images/product/the-case-of-the-man-who-died-laughing.jpg",
        title:"The case of the man who died laughing",
        author:"Tarquin Hall",
        rental: 5,
        deposit: 20,
        genre:"fiction",
        summary:"Murder is no laughing matter.Yet a prominent Indian scientist dies in a fit of giggles when a Hindu goddess appears from a mist and plunges a sword into his chest.The only one laughing now is the main suspect, a powerful guru named Maharaj Swami, who seems to have done away with his most vocal critic."
    },
    {
        id:20,
        image:"../images/product/verity.jpg",
        title:"Verity",
        author:"Colleen Hoover",
        rental: 5,
        deposit: 50,
        genre:"fiction",
        summary:"A thriller guaranteed to keep you up all night, with a twist that will leave you reeling . . . The TikTok sensation that you’ll recommend to everyone you know.Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. "
    },
    {
        id:21,
        image:"../images/product/the-box-and-the-dragonfly.jpg",
        title:"The Box and the Dragonfly",
        author:"Ted Sanders",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"From the moment Horace F. Andrews sees the sign from the bus—a sign with his own name on it—everything changes. The sighting leads him underground, to the House of Answers, a hidden warehouse full of mysterious objects. But there he finds only questions. What is this curious place? Who are the strange, secretive people who entrust him with a rare and immensely powerful gift? And what is he to do with it?"
    },
    {
        id:22,
        image:"../images/product/the-harp-and-the-ravenvine.jpg",
        title:"The Harp and the Ravenvine",
        author:"Ted Sanders",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"Ted Sanders’s acclaimed Keepers series returns with The Harp and the Ravenvine, the eagerly awaited sequel to The Box and the Dragonfly, hailed as a “winding fantasy adventure” by the New York Times Book Review. This classic tween fantasy has a science fiction twist and will thrill readers with intrigue, magic, and the unexpected at every turn."
    },
    {
        id:23,
        image:"../images/product/the-thirteen-ghosts.jpg",
        title:"The Thirteen Ghosts",
        author:"Geronimo Stilton",
        rental: 5,
        deposit: 10,
        genre:"adventure",
        summary:"Creepella von Cacklefur and her niece, Shivereen, visit scary Squeakspeare Mansion. There they meet Bobby Squeakspeare, a descendent of the famouse writer, William Squeakspeare. Will the spooky rooms and ghosts they find inside the mansion be friendly–or frightening?"
    },
    {
        id:24,
        image:"../images/product/how-to-fight-a-dragons-fury.jpg",
        title:"How to Fight a Dragon’s Fury",
        author:"Cressida Cowell",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"The Doomsday of Yule has arrived, and the future of dragonkind lies in the hands of one boy with nothing to show but everything to fight for. Hiccup’s quest is clear…but can he end the rebellion? Can he prove himself to be king? Can he save the dragons? The stakes have never been higher, as the very fate of the Viking world hangs in the balance!"
    },
    {
        id:25,
        image:"../images/product/Stardust.jpg",
        title:"Stardust",
        author:"Neil Gaiman",
        rental: 5,
        deposit: 20,
        genre:"adventure",
        summary:"Stardust is an utterly charming fairy tale in the tradition of The Princess Bride and The Neverending Story. Neil Gaiman, creator of the darkly elegant Sandman comics and author of The Day I Swapped My Dad for Two Goldfish, tells the story of young Tristran Thorn and his adventures in the land of Faerie. "
    },
    {
        id:26,
        image:"../images/product/the-quest-for-paradise.jpg",
        title:"The Quest for Paradise",
        author:"Geronimo Stilton",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"Holey cheese Join Geronimo as he returns to the Kingdom of Fantasy in this sequel to the very first Geronimo stilton hardcover adventure.In this 320-page, full-color hardcover adventure, the Queen of the Fairies invites Geronimo back to her fantastical world to help in the quest for the true heart of happiness. "
    },
    {
        id:27,
        image:"../images/product/kensukes-kingdom.jpg",
        title:"Kensuke’s Kingdom",
        author:"Michael Morpurgo",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"When Michael’s father loses his job, he buys a boat and convinces Michael and his mother to sail around the world. It’s an ideal trip – even Michael’s sheepdog can come along. It starts out as the perfect family adventure – until Michael is swept overboard. He’s washed up on an island, where he struggles to survive. Then he discovers that he’s not alone. His fellow-castaway, Kensuke, is wary of him. But when Michael’s life is threatened, Kensuke slowly lets the boy into his world."
    },
    {
        id:28,
        image:"../images/product/escape-from-mr-lemoncellos-library.jpg",
        title:"Escape from Mr. Lemoncello’s Library",
        author:"Chris Grabenstein",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"When Kyle learns that the world’s most famous game maker, Luigi Lemoncello, has designed the town’s new library and is having an invitation-only lock-in on opening night, he’s determined to be there! But the tricky part isn’t getting into the library—it’s getting out. Kyle’s going to need all his smarts, because a good roll of the dice or lucky draw of the cards is not enough to win in Mr. Lemoncello’s library"
    },
    {
        id:29,
        image:"../images/product/thea-stilton-and-the-secret-city.jpg",
        title:"Thea Stilton and the Secret City",
        author:"Thea Stilton",
        rental: 5,
        deposit: 10,
        genre:"adventure",
        summary:"In this amazing adventure, Thea’s friends the Thea Sisters head to Peru, where a good friend of Paulina’s is in danger. There, the five mice climb the Andes mountains in search of a mysterious treasure that’s hidden in the Secret City of the Incas. Readers will love following the clues to help the Thea Sisters solve the mystery!"
    },
    {
        id:30,
        image:"../images/product/lost-treasure-of-the-emerald-eye.jpg",
        title:"Lost Treasure of the Emerald Eye",
        author:"Geronimo Stilton",
        rental: 5,
        deposit: 10,
        genre:"adventure",
        summary:"Who Is Geronimo Stilton?That’s me! I run a newspaper, but my true passion is writing tales of adventure. Here on Mouse Island, my books are all best-sellers! What’s that? You’ve never read one? Well, my books are full of fun. They are whisker-licking good stories, and that’s a promise!Lost Treasure of the Emerald EyeIt all started when my sister, Thea, discovered a mysterious map. It showed a secret treasure on a faraway island. "
    },
    {
        id:31,
        image:"../images/product/the-cheese-experiment.jpg",
        title:"The Cheese Experiment",
        author:"Geronimo Stilton",
        rental: 5,
        deposit: 10,
        genre:"adventure",
        summary:"New Mouse City was in a panic. A strange epidemic had broken out — mice everywhere were covered in weird blue spots! Mouse Island’s most famouse doctor immediately set to work with his team to try to find the cure… but someone was trying to stop him. Could I figure out who before I ended up blue myself?"
    },
    {
        id:32,
        image:"../images/product/christmas-catastrophe.jpg",
        title:"Christmas Catastrophe",
        author:"Geronimo Stilton",
        rental: 5,
        deposit: 10,
        genre:"adventure",
        summary:"Geronimo Stilton, adventuremouse? Not me! But surely a little skiing couldn’t hurt a rodent, right? Wrong. Moldy mozzarella! When my ski trip landed me in the hospital, I was sure it was going to be the worst Christmas ever! But my family and friends had something else in mind. . ."
    },
    {
        id:33,
        image:"../images/product/wedding-crasher.jpg",
        title:"Wedding Crasher",
        author:"Geronimo Stilton",
        rental: 5,
        deposit: 10,
        genre:"adventure",
        summary:"Oh, how I hate traveling! So when I got an invitation to visit a long-lost relative who lives far, far away, I wasn’t squeaking with joy. But Thea, Trap, and Benjamin thought it sounded fabumouse. They dragged me along to the crazy castle on Penny-Pincher Peak. Rat-munching rattlesnakes! I never should have agreed to go with them. . ."
    },
    {
        id:34,
        image:"../images/product/the-search-for-sunken-treasure.jpg",
        title:"The Search for Sunken Treasure",
        author:"Geronimo Stilton",
        rental: 5,
        deposit: 10,
        genre:"adventure",
        summary:"Holey cheese, what an adventure! I was off to the Ratlápagos Islands with my family in search of a long-lost buried treasure. But oh, how I hate traveling! Being on a ship in the middle of the sea wasn’t my idea of a fabumouse time. And I was beginning to suspect that we weren’t the only ones searching for the treasure. . ."
    },
    {
        id:35,
        image:"../images/product/the-curse-of-the-cheese-pyramid.jpg",
        title:"The Curse Of The Cheese Pyramid",
        author:"Geronimo Stilton",
        rental: 5,
        deposit: 10,
        genre:"adventure",
        summary:"Who is Geronimo Stilton? Why, that’s me! I run a newspaper, but my true passion is writing tales of adventure. Here on Mouse Island, my books are all bestsellers! What’s that? You’ve never read one? Well, my books are full of fun. They are whisker-licking-good stories, and that’s a promise! It was a dream come true… I, Geronimo Stilton, was going to EGYPT! I climbed onboard a CRABBY old camel that would take me across the desert to the Great CHEESE Pyramid."
    },
    {
        id:36,
        image:"../images/product/life-of-pi-1.jpg",
        title:"Life of Pi",
        author:"Yann Martel",
        rental: 5,
        deposit: 20,
        genre:"adventure",
        summary:"The son of a zookeeper, Pi Patel has an encyclopedic knowledge of animal behavior and a fervent love of stories. When Pi is sixteen, his family emigrates from India to North America aboard a Japanese cargo ship, along with their zoo animals bound for new homes."
    },
    {
        id:37,
        image:"../images/product/gangsta-granny.jpg",
        title:"Gangsta Granny",
        author:"Yann Martel",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"Another hilarious and moving novel from David Walliams, number one bestseller and fastest growing children’s author in the country. A story of prejudice and acceptance, funny lists and silly words, this new book has all the hallmarks of David’s previous bestsellers."
    },
    {
        id:38,
        image:"../images/product/the-worlds-worst-children.jpg",
        title:"The World’s Worst Children",
        author:"David Walliams, Tony Ross (Illustrations)",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"From the world’s favourite author, David Walliams – ten cautionary tales and a delightfully dreadful cast of characters; all in a gorgeously gifty FULL COLOUR format! Are you ready to meet the World’s Worst Children? Five beastly boys and five gruesome girls!"
    },
    {
        id:39,
        image:"../images/product/slime.jpg",
        title:"Slime",
        author:"David Walliams, Tony Ross (Illustrations)",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"The new children’s book from No. 1 bestselling author David Walliams – a fantastically funny tale illustrated by artistic genius, Tony Ross. WELCOME TO THE ISLE OF MULCH…This little island is home to a large number of horrible grown-ups. The school, the local park, the toy shop and even the island’s ice-cream van are all run by awful adults who like nothing more than making children miserable. "
    },
    {
        id:40,
        image:"../images/product/grandpas-great-escape.jpg",
        title:"Grandpa’s Great Escape",
        author:"David Walliams, Tony Ross (Illustrations)",
        rental: 5,
        deposit: 15,
        genre:"adventure",
        summary:"Grandpa lives in a Maximum Security Twighlight Zone, and his Grandson attempts to set him free. Jack’s Grandpa… wears his slippers to the supermarket serves up tinned tongue for dinner and often doesn’t remember Jack’s name But he can still take to the skies in a speeding Spitfire and save the day…" 
    }
    
];