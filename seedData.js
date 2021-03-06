const seedData = [
   // Violence
   {
      title: 'Joker',
      description:
         'In 1981 Gotham City, a struggling, mentally ill comic battles to be seen. His life takes a dark, gut-wrenching turn after he lashes back at attackers.',
      genre: 'Violence',
      genres: 'US Movies, Social Issue Dramas, Crime Movies',
      duration: '2h 1m',
      age: '18',
      img: 'joker',
   },
   {
      title: 'John Wick_ Chapter 3 - Parabellum',
      description:
         'With a $14 million bounty on his head, elite hitman John Wick must battle every killer in his path to reach old allies and redeem his life.',
      cast: 'Halle Berry, Keanu Reeves, more',
      genre: 'Violence',
      genres: 'US Movies, Action & Adventure, Crime Movies',
      duration: '2h 10m',
      age: '18',
      img: 'john-3-wick',
   },
   {
      title: 'Red Notice',
      description:
         'An FBI profiler pursuing the world most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who always one step ahead.',
      cast: 'Dwayne Johnson, Ryan Reynolds, more',
      genre: 'Violence',
      genres: 'US Movies, Action & Adventure, Crime Movies',
      duration: '1h 57m',
      age: '13',
      img: 'red-notice',
   },
   {
      title: 'Silverton Siege',
      description:
         'After a failed sabotage mission, a trio of anti-apartheid freedom fighters ends up in a tense bank hostage situation. Based on a true story.',
      cast: 'Thabo Rametsi, Arnold Vosloo, more',
      genre: 'Violence',
      genres: 'South African, Social Issue Dramas ',
      duration: '1h 41m',
      age: '16',
      img: 'silverton-siege',
   },
   {
      title: 'The Takedown',
      description:
         'Forced to reteam after a decade, two mismatched cops investigate a murder in a divided French town, where a wider conspiracy looms.',
      cast: 'Omar Sy, Laurent Lafitte, more',
      genre: 'Violence',
      genres: 'Action & Adventure, Crime Movies, French',
      duration: '2h 1m',
      age: '18',
      img: 'the-takedown',
   },
   {
      title: '6 Underground',
      description:
         'After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.',
      cast: 'Ryan Reynolds, M??lanie Laurent, more',
      genre: 'Violence',
      genres: 'Action & Adventure, Crime Movies',
      duration: '2h 8m',
      age: '18',
      img: 'sunderground',
   },
   {
      title: 'Triple Frontier',
      description:
         'Loyalties are tested when five former special forces operatives reunite to steal a drug lord fortune, unleashing a chain of unintended consequences.',
      cast: 'Ben Affleck, Oscar Isaac, Charlie Hunnam, more',
      genre: 'Violence',
      genres: 'Action & Adventure, US Movies',
      duration: '2h 5m',
      age: '18',
      img: 'triple-frontier',
   },
   {
      title: 'White House Down',
      description:
         'When a paramilitary group engineers a violent takeover of the White House, the president must try to hide from the attackers until he can be rescued.',
      cast: 'Channing Tatum, Jamie Foxx, more',
      genre: 'Violence',
      genres: 'Action & Adventure, Crime Movies',
      duration: '2h 11m',
      age: '16',
      img: 'white-house-down',
   },
   {
      title: 'Extraction',
      description:
         'A hardened mercenary mission becomes a soul-searching race to survive when he sent into Bangladesh to rescue a drug lord kidnapped son.',
      cast: 'Chris Hemsworth, Rudhraksh Jaiswal, more',
      genre: 'Violence',
      genres: 'US Movies, Movies Based on Books, Action & Adventure',
      duration: '1h 57m',
      age: '18',
      img: 'extraction',
   },
   //  Thriller
   {
      title: 'Mother_Android',
      description:
         'In a post-apocalyptic world rocked by a violent android uprising, a young pregnant woman and her boyfriend desperately search for safety.',
      cast: 'Chlo?? Grace Moretz, Algee Smith, ',
      genre: 'Thriller',
      genres: 'US Movies, Sci-Fi Movies, Thriller Movies',
      duration: '1h 51m',
      age: '18',
      img: 'morther-android',
   },
   {
      title: 'Army of Thieves',
      description:
         'In this prequel to "Army of the Dead," a mysterious woman recruits bank teller Dieter to help her crew crack three legendary safes across Europe.',
      cast: 'Matthias Schweigh??fer, Ruby O. Fee, more ',
      genre: 'Thriller',
      genres: 'German, Comedies, Crime Movies',
      duration: '2h 9m',
      age: '16',
      img: 'army-or-thieves',
   },
   {
      title: 'The Call',
      description:
         'Connected by phone in the same home but 20 years apart, a serial killer puts another woman???s past ??? and life ??? on the line to change her own fate.',
      cast: 'Park Shin-hye, Jun Jong-seo, more',
      genre: 'Thriller',
      genres: 'Korean, Thriller Movies',
      duration: '1h 52m',
      age: '16',
      img: 'the-call',
   },
   {
      title: 'The Platform',
      description:
         'A slab of food descends floor by floor in a prison. The inmates above eat heartily, leaving those below starving and desperate. A rebellion is imminent.',
      cast: 'Iv??n Massagu??, Antonia San Juan, more',
      genre: 'Thriller',
      genres: 'Spanish, Thriller Movies',
      duration: '1h 34m',
      age: '18',
      img: 'the-platform',
   },
   {
      title: 'Deadly Illusions',
      description:
         'After a bestselling novelist suffering from writer block hires a new nanny for her children, the line between fiction and reality starts to blur.',
      cast: 'Kristin Davis, Dermot Mulroney Geer Grammer, more',
      genre: 'Thriller',
      genres: 'US Movies, Thriller Movies',
      duration: '1h 54m',
      age: '18',
      img: 'deadly-illusions',
   },
   {
      title: 'The Guilty',
      description:
         'A troubled police detective assigned to 911 operator duty scrambles to save a distressed caller during a harrowing day of revelations ??? and reckonings.',
      cast: 'Jake Gyllenhaal, Ethan Hawke, Riley Keough, more',
      genre: 'Thriller',
      genres: 'US Movies, Crime Movies, Dramas',
      duration: '1h 31m',
      age: '16',
      img: 'the-guilty',
   },
   {
      title: 'The Outsider',
      description:
         'An American soldier imprisoned in postwar Japan enters the dark world of the yakuza, adopting their way of life in repayment for his freedom.',
      cast: 'Jared Leto, Tadanobu Asano, Kippei Shiina, more',
      genre: 'Thriller',
      genres: 'US Movies, Crime Movies, Dramas',
      duration: '2h 1m',
      age: '18',
      img: 'the-outsider',
   },
   {
      title: 'Pandora',
      description:
         'When an earthquake hits a Korean village housing a run-down nuclear power plant, a man risks his life to save the country from imminent disaster.',
      cast: 'Kim Nam-gil, Kim Joo-hyun, Jung Jin-young',
      genre: 'Thriller',
      genres: 'Korean, Social Issue Dramas, Dramas',
      duration: '2h 16m',
      age: '16',
      img: 'pandora',
   },
   {
      title: 'Time to Hunt',
      description:
         'Wanting to leave their dystopian world behind for a faraway paradise, three outlaws plot a money heist ??? and draw the attention of a vicious killer.',
      cast: 'Lee Je-hoon, Ahn Jae-hong, Choi Woo-shik, more',
      genre: 'Thriller',
      genres: 'Korean, Crime Movies, Thriller Movies',
      duration: '2h 15m',
      age: '18',
      img: 'time-to-hunt',
   },
   {
      title: 'Rogue City',
      description:
         'Caught in the crosshairs of police corruption and Marseille???s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.',
      cast: 'Lannick Gautry, Stanislas Merhar, Kaaris, more',
      genre: 'Thriller',
      genres: 'French, Crime Movies, Dramas',
      duration: '1h 56m',
      age: '18',
      img: 'rogue-city',
   },
   //    Vietname movies
   {
      title: 'Camellia Sisters',
      description:
         'Tensions rise and untold secrets surface for three royal sisters when a family treasure is stolen the night before an antique auction.',
      cast: 'Le Khanh, Kaity Nguyen, Hong Van, more',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese. Dramas',
      duration: '1h 56m',
      age: '16',
      img: 'camellia-sisters',
   },
   {
      title: 'Hollow',
      description:
         'As a family prepares to grieve for their presumably drowned daughter, she is found alive -- but her spirit appears possessed by someone else soul.',
      cast: 'Ngoc Diep Huyen, Son Bao Tran, Nguyen Hong An, more',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese. Horror Movies',
      duration: '1h 56m',
      age: '16',
      img: 'hollow',
   },
   {
      title: 'The Rebel',
      description:
         'In 1920s Vietnam, a young man pursues rebels -- his fellow countrymen -- against the colonial French government, a job that grates on his conscience.',
      cast: 'Johnny Nguyen, Van Veronica Ngo, Dustin Nguyen, more',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese, Martial Arts Movies, Action & Adventure',
      duration: '1h 44m',
      age: '18',
      img: 'the-rebel',
   },
   {
      title: 'Glitch',
      description:
         'A woman communicates with a supernatural presence through an old TV in her home, unearthing a murderous secret and turning her own life upside down.',
      cast: 'Nha Phuong, Truong The Vinh, Tien Luat, more',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese, Sci-Fi Movies, Crime Movies',
      duration: '1h 44m',
      age: '18',
      img: 'glitch',
   },
   {
      title: 'Trang Quynh',
      description:
         'A clever prankster attempts to exonerate his beloved teacher from a troubling conviction that involves a wily bureaucrat.',
      cast: 'Quoc Anh, Nha Phuong, Tran Thanh, more',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese, Action & Adventure, Comedies',
      duration: '1h 33m',
      age: '13',
      img: 'trang-quynh',
   },
   {
      title: 'The Big Boss',
      description:
         'A rural cook moves to the city for a better life but gets coerced into standing in for an incapacitated gang leader who he strikingly resembles.',
      cast: 'Thai Hoa, Tinna Tinh, Phi Thanh Van, more',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese, Comedies',
      duration: '1h 35m',
      age: '16',
      img: 'the-big-boss',
   },
   {
      title: '200 Pounds Beauty',
      description:
         'With her looks deemed uncommercial, a gifted singer drastically transforms her appearance in an attempt to become a pop star.',
      cast: 'Minh Hang, Rocker Nguyen, Phuong Trinh Joile, more',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese, Romantic Comedies, Comedies',
      duration: '1h 31m',
      age: '13',
      img: '200-pounds-beauty',
   },
   {
      title: 'Song Lang',
      description:
         'When a surly debt collector demands payment from a folk opera troupe, he forms an unlikely bond with their rising performer who must stall for time.',
      cast: 'Lien Binh Phat, Isaac',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese, LGBTQ Movies, Dramas',
      duration: '1h 41m',
      age: '16',
      img: 'song-lang',
   },
   {
      title: 'Dreamy Eyes',
      description:
         'Through heartbreak and betrayal, Ngan unrequited love for his childhood best friend H?? La endures for a generation in this sweeping romance.',
      cast: 'Tran Nghia, Truc Anh, Tran Phong, more',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese, Movies Based oon Books, Dramas',
      duration: '1h 56m',
      age: '13',
      img: 'dreamy-eyes',
   },
   {
      title: 'The Guardian',
      description:
         'A tragedy surrounding a pop star propels her backup singer to fame, but the new star is plagued by supernatural occurrences.',
      cast: 'Truc Anh, Amee, Salim, more',
      genre: 'Vietnam Movies',
      genres: 'Vietnamese, Dramas, Thriller Movies',
      duration: '2h 7m',
      age: '18',
      img: 'the-guardian',
   },
   //    Animme
   {
      title: 'New Gods_ Nezha Reborn',
      description:
         'While living as an ordinary deliveryman and motor racing fan, Nezha encounters old nemeses and must rediscover his powers to protect his loved ones.',
      cast: 'Yang Tianxiang, Zhang He, Xuan Xiaoming, more',
      genre: 'Anime Movies',
      genres: 'Movies Based on Books, Adult Animation, Mainland Chinese Movies',
      duration: '1h 50m',
      age: '13',
      img: 'nezhu-reborn',
   },
   {
      title: 'Mobile Suit Gundam Hathaway',
      description:
         'After Char???s rebellion, Hathaway Noa leads an insurgency against Earth Federation, but meeting an enemy officer and a mysterious woman alters his fate.',
      cast: 'Kensho Ono, Reina Ueda, Junichi Suwabe, more',
      genre: 'Anime Movies',
      genres: 'Japanese, Sci-Fi Movies, Movies Based on Books',
      duration: '1h 36m',
      age: '16',
      img: 'hat-way',
   },
   {
      title: 'GANTZ_O',
      description:
         'Teams of recently deceased people who live been revived and given high-tech weapons must cooperate to defeat an army of monsters in Tokyo and Osaka.',
      cast: 'Daisuke Ono, M???A???O, Tomohiro Kaku, more',
      genre: 'Anime Movies',
      genres: 'Japanese, Sci-Fi Movies, Horror Anime',
      duration: '1h 35m',
      age: '18',
      img: 'gantz',
   },
   {
      title: 'Batman Ninja',
      description:
         'Reimagined by Japan finest artists, Batman must face his foes in feudal Japan when a malfunctioning Quake Engine transports them all back in time.',
      cast: 'Koichi Yamadera, Wataru Takagi, Ai Kakuma, more',
      genre: 'Anime Movies',
      genres: 'Japanese, Historical Anime, Action Anime',
      duration: '1h 25m',
      age: '13',
      img: 'batman-ninja',
   },
   {
      title: 'Porco Rosso',
      description:
         'When sky pirates terrorize the Adriatic Sea, this Italian pilot is the only one brave enough to take them on. Only catch: he???s half-man, half-pig.',
      cast: 'Shuichiro Moriyama, Tokiko Kato, Sanshi Katsura, more',
      genre: 'Anime Movies',
      genres: 'Japanese, Family Movies, Anime Movies',
      duration: '1h 33m',
      age: '13',
      img: 'porca-rosso',
   },
   {
      title: 'Altered Carbon_ Resleeved',
      description:
         'On the planet Latimer, Takeshi Kovacs must protect a tattooist while investigating the death of a yakuza boss alongside a no-nonsense CTAC.',
      cast: 'Tatsuhisa Suzuki, Rina Sato, Ayaka Asai, more',
      genre: 'Anime Movies',
      genres: 'Japanese, Sci-Fi Movies, Mystery & Thriller Anime',
      duration: '1h 14m',
      age: '18',
      img: 'resleeved',
   },
   {
      title: 'Pom Poko',
      description:
         'Pushed out of their forests by human development, the wild tanuki of Tama Hills fight back with their shape-shifting powers ??? if they can get it right.',
      cast: 'Kokondei Shinchou, Makoto Nonomura, Yuriko Ishida, more',
      genre: 'Anime Movies',
      genres: 'Japanese, Social Issue Dramas, Family Movies',
      duration: '1h 59m',
      age: '18',
      img: 'pom-poko',
   },
   {
      title: 'Overlord_ The Undead King',
      description:
         'When the popular online game Yggdrasil is shut down, a lonely player named Momonga decides to stay logged in and take over this digital frontier.',
      cast: 'Satoshi Hino, Yumi Hara, Sumire Uesaka, more',
      genre: 'Anime Movies',
      genres: 'Japanese, Anime based on Light Novels, Fantasy Anime',
      duration: '1h 42m',
      age: '16',
      img: 'overlord',
   },
   {
      title: 'The Witcher_ Nightmare of the Wolf',
      description:
         'Escaping from poverty to become a witcher, Vesemir slays monsters for coin and glory, but when a new menace rises, he must face the demons of his past.',
      cast: 'Theo James, Mary McDonnell, Lara Pulver, more',
      genre: 'Anime Movies',
      genres: 'TV Shows Based on Books, US Movies, Movies Based on Books',
      duration: '1h 23m',
      age: '18',
      img: 'the-witcher-wolf',
   },
   //    Fantacy
   {
      title: 'Night Teeth',
      description:
         'A young driver picks up two mysterious women for a night of party hopping. But when his passengers reveal their true nature, he must fight to stay alive.',
      cast: 'Jorge Lendeborg Jr, Debby Ryan, Lucy Fry, more',
      genre: 'Fantasy Movies',
      genres: 'US Movies, Teen Movies, Thriller Movies',
      duration: '1h 48m',
      age: '16',
      img: 'night-teeth',
   },
   {
      title: 'Fistful of Vengeance',
      description:
         'A revenge mission becomes a fight to save the world from an ancient threat when superpowered assassin Kai tracks a killer to Bangkok.',
      cast: 'Iko Uwais, Lewis Tan, Lawrence Kao, more',
      genre: 'Fantasy Movies',
      genres: 'Martical Arts Movies, US Movies, Action & Adventure',
      duration: '1h 36m',
      age: '18',
      img: 'fis-of-ven',
   },
   {
      title: 'Super Me',
      description:
         'A struggling screenwriter discovers his lucrative ability to bring antiques from his dreams into the real world ??? but his new life soon unravels.',
      cast: 'Darren Wang, Song Jia, Cao Bingkun, more',
      genre: 'Fantasy Movies',
      genres: 'Mainland Chinese Movies, CHinese Movies, Action & Adventure',
      duration: '1h 43m',
      age: '16',
      img: 'super-me',
   },
   {
      title: 'Afterlife of the Party',
      description:
         'Cassie lives to party... until she dies in a freak accident. Now this social butterfly needs to right her wrongs on Earth if she wants to earn her wings.',
      cast: 'Victoria Justice, Midori Francis, Robyn Scott, more',
      genre: 'Fantasy Movies',
      genres: 'Romantic Comedies, US Movies, Comedies',
      duration: '1h 49m',
      age: '7',
      img: 'afterlife-party',
   },
   {
      title: 'Nightbooks',
      description:
         'Scary story fan Alex must tell a spine-tingling tale every night ??? or stay trapped with his new friend in a wicked witch magical apartment forever.',
      cast: 'Winslow Fegley, Lidya Jewett, Krysten Ritter, more',
      genre: 'Fantasy Movies',
      genres: 'Mysterise, Family Movies, US Movies',
      duration: '1h 43m',
      age: '7',
      img: 'night-book',
   },
   {
      title: 'Bleach',
      description:
         'When high schooler Ichigo is suddenly given reaper abilities, he really wants to give the powers back. But he will have to reap some souls first.',
      cast: 'Sota Fukushi, Hana Sugisaki, Ryo Yoshizawa, more',
      genre: 'Fantasy Movies',
      genres: 'Japanese, Action & Adventure',
      duration: '1h 48m',
      age: '13',
      img: 'bleach',
   },
   {
      title: 'King Kong',
      description:
         'Peter Jackson is remake of the classic follows a group of adventurous explorers and filmmakers to Skull Island, where they search for a giant gorilla.',
      cast: 'John Sumner, Evan Parke, Andy Serkis, more',
      genre: 'Fantasy Movies',
      genres: 'New Zealand, Action & Adventure',
      duration: '3h 7m',
      age: '16',
      img: 'king-kong',
   },
   {
      title: 'Assassin_s Creed',
      description:
         'In this adaptation of the critically acclaimed video game franchise, a man on death row is rescued from execution by a mysterious organization.',
      cast: 'Michael Fassbender, Marion Cotillard, Jeremy Irons, more',
      genre: 'Fantasy Movies',
      genres: 'Sci-Fi Movies, US Movies, Action & Adventure',
      duration: '1h 55m',
      age: '13',
      img: 'assassines',
   },
   {
      title: 'The Hobbit_ An Unexpected Journey',
      description:
         'In this prequel to the "Lord of the Rings" trilogy, Bilbo Baggins joins a hardy group of dwarves on a dangerous quest to reclaim their lost kingdom.',
      cast: 'Ian McKellen, Martin Freeman, Richard Armitage, more',
      genre: 'Fantasy Movies',
      genres: 'US Movies, Movies Based on Books, Action & Adventure',
      duration: '2h 49m',
      age: '16',
      img: 'hobbit',
   },
   {
      title: 'The Addams Family',
      description:
         'The Addams family ??? Gomez, Morticia, Wednesday and Pugsley ??? welcome long-lost relation Fester back into the creepy, kooky and close-knit fold.',
      cast: 'Anjelica Huston, Raul Julia, Christopher Lloyd, more',
      genre: 'Fantasy Movies',
      genres: 'US Movies, Comedies',
      duration: '1h 40m',
      age: '13',
      img: 'addams',
   },
];
