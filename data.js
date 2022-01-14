const data = {
  castles: [
    {
      _id: "1",
      name: "Hluboká Castle, Czech Republic",
      image: "/images/Hluboka-Castle-Czech-Republic.png",
      price: 25800,
      countInStock:10,
      rating: 0.5,
      numReviews: 8,
      description:
        "This Renaissance-era castle is a favorite among newlyweds. Located in Hluboká nad Vltavou, a region in South Bohemian Czech Republic, the castle overlooks breathtaking views of the Czech countryside and offers wedding packages",
      owner: "A",
      city: "Ahorn",
      country: "Germany",
      lon: " 14.4358",
      lat: " 49.0514",
    },

    {
      _id: "2",
      name: "Neuschwanstein Castle, Germany",
      image: "/images/Neuschwanstein-Castle-Germany2.webp",
      price: 45000,
      countInStock:1,
      rating: 4.9,
      numReviews: 22,
      description:
        "Once the home of Bavarian royalty, the grounds of Neuschwanstein Castle were opened to the public in 1886 and attract over one million visitors a year thanks to its majestic views overlooking the German countryside. The design is the inspiration for Disneyland's Sleeping Beauty Castle—but totally beats tying the knot amongst thousands of amusement park goers. Couples that are interested can contact the grounds to learn more about their wedding ceremony options.",
      owner: "Bavarian Palace Department",
      city: " Hohenschwangau ",
      country: "Germany",
      lon: "10.749646",
      lat: "47.557732",
    },
    
    {
        _id: "3",
        name: "Burg Eltz,Germany",
        image: "/images/Burg-Eltz-Germany.jpg",
        price: 26800,
        countInStock:2,
        rating: 4.5,
        numReviews: 8,
        description:
          "If you’ve always dreamed of your wedding day being a real-life fairy tale, look no further for your Happily Ever After inspiration! Philip and Sarah inspire us in one of the most romantic fairy tale elopements we’ve ever seen. Hidden deep in the forests of Germany is Burg Eltz, a medieval castle that features some classic Bavarian charm. Mix that with the misty, wooded setting and the rustic Fall foliage and you’ve got yourself a storybook ending ready to unfold! If you’ve been thinking of eloping, this elopement right here is the perfect inspiration to show that you don’t need much to make a perfect and magical day!",
        owner: "A",
        city: " Wierschem",
        country: "Germany",
        lon: "7.336700",
        lat: "50.204899",
      },
    {
      _id: "4",
      name: "Schloss Benrath,Germany",
      image: "/images/Schloss-Benrath-Germany.jpg",
      price: 27000,
      countInStock:0,
      rating: 4,
      numReviews: 11,
      description:
        "Classic elegance, stylish ambience and high-quality equipment. The 18th-century castle is one of the city’s most popular historical venues.  And it’s not hard to understand why: beautiful purple flowers and a lake surrounds the outside of Schloss Benrath, making the view amazing. Inside, you have the elegant Dome Hall available to be booked for the ceremony on Wednesdays and Thursdays at 12.00 and at 13.00. After the ceremony you can still take photos inside and rent the terrace for a champagne reception or simply rent a room from the premises. It’s a complete experience!",
      owner: "B",
      city: "Düsseldorf ",
      country: "Germany",
      lon: "6.8706",
      lat: "51.1607",
    },
    {
      _id: "5",
      name: "Boldt Castle, Canada",
      image: "/images/Boldt-Castle-Canada.png",
      price: 27800,
      countInStock:10,
      rating: 4.9,
      numReviews: 14,
      description:
        "Sitting right at the Canada/U.S. border on the St. Lawrence River lies Boldt Castle, a 120-room property on picturesque Heart Island. In addition to its romantic design, the history of the building has a love story of its own: George Boldt, former owner of the Waldorf Astoria Hotel in New York City, built the lavish home for his wife, Louise. Couples can book this wedding venue (ceremony only)",
      owner: " George Boldt",
      city: "Alexandria Bay",
      country: "Canada",
      lon: "-75.922653",
      lat: "44.34434",
    },

    {
      _id: "6",
      name: "Wasserschloss Lembeck,Germany",
      image: "/images/Wasserschloss-Lembeck-Germany.jpg",
      price: 25600,
      countInStock:10,
      rating: 4.2,
      numReviews: 12,
      description:
        "In the northern part of the district Recklinghausen, lies the delightful Wasserschloss Lembeck. The castle lies on two islands surrounded by a large moat. The buildings are lined up along a passable east-west axis of about 500m length, which is a rare concept in Baroque architecture. Surrounded by beautiful forests and water-rich meadows of a beautiful nature park, the castle presents itself as a great option to hold a destination wedding. In the private chapel Lembeck St. Blasius, you can plan a Catholic ceremony fot 30 to 40 people. Civil ceremonies are also possible to take place on the first Saturday and every third Friday of the month, in the Merveldt Gallery. In the Schlaun’schen Festsaal you can invite guests for your wedding reception or a festive banquet for up to 108 people. Almost too good to be true!",
      owner: "A",
      city: "Dorsten",
      country: "Germany",
      lon: "6.96467488",
      lat: "51.75487697",
    },

    {
      _id: "7",
      name: "Schloss Eckberg,Germany",
      image: "/images/Schloss-Eckberg-Germany.jpg",
      price: 28000,
      countInStock:10,
      rating: 4.5,
      numReviews: 8,
      description:
        "Located in one of the most incredible cities of Germany, Dresden, Schloss Eckberg was build between the years 1858 and 1861. The fact that it is surrounded by lots and lots of green and it has an amazing view over the Elbe just make it better. Stylish and historic rooms can fit up to 200 guests. Friendly service staff, an extensive range of regional vineyards and a mix between classic and modern cuisine. It’s hard to not fall in love for this one…",
      owner: "A",
      city: "Dresden",
      country: "Germany",
      lon: "13.7993733",
      lat: "51.0635771",
    },

    {
      _id: "8",
      name: "Schlosshotel Hohenstein,Germany",
      image: "/images/Schlosshotel-Hohenstein-Germany.jpg",
      price: 30000,
      countInStock:10,
      rating: 4.9,
      numReviews: 12,
      description:
        "Surrounded by lush meadows and dense forests, just a few kilometers from Coburg, you can find the Schlosshotel Hohenstein. This breath-taking fairytale castle dates back to the 13th century and encloses a hotel with two stylish restaurants, six historic rooms and 15 individual hotel rooms and suites. The different historical rooms, such as the Hall of Mirrors, the Music Salon and the Garden Room, are ideal for hosting events of those who want to create an unforgettable atmosphere. To contribute to that, the castle is located in a fabulous scenery and it is surrounded by a romantic park with its own chapel that can be rented for the ceremony. There, it’s possible to accommodate up to 120 people. The excellent gastronomy will make you even more excited when you think about your unforgettable party. If you are looking for an exclusive place, this romantic restored castle is a great option for you!",
      owner: "A",
      city: "Ahorn",
      country: "Germany",
      lon: "10.93405",
      lat: "50.21767",
    },
    {
      _id: "9",
      name: "Schloss Callenberg,Germany",
      image: "/images/Schloss-Callenberg-Germany.jpg",
      price: 37000,
      countInStock:10,
      rating: 4.8,
      numReviews: 20,
      description:
        "Surrounded by lush meadows and dense forests, just a few kilometers from Coburg, you can find the Schlosshotel Hohenstein. This breath-taking fairytale castle dates back to the 13th century and encloses a hotel with two stylish restaurants, six historic rooms and 15 individual hotel rooms and suites. The different historical rooms, such as the Hall of Mirrors, the Music Salon and the Garden Room, are ideal for hosting events of those who want to create an unforgettable atmosphere. To contribute to that, the castle is located in a fabulous scenery and it is surrounded by a romantic park with its own chapel that can be rented for the ceremony. There, it’s possible to accommodate up to 120 people. The excellent gastronomy will make you even more excited when you think about your unforgettable party. If you are looking for an exclusive place, this romantic restored castle is a great option for you!",
      owner: "D",
      city: "Coburg",
      country: "Germany",
      lon: "10.923604888915975",
      lat: "50.275059415107506",
    },
    {
      _id: "10",
      name: "Schloss Ludwigsburg,Germany",
      image: "/images/Residenzschloss-Ludwigsburg-Germany.jpg",
      price: 24000,
      countInStock:10,
      rating: 4.6,
      numReviews: 5,
      description:
        "Have you ever thought about getting married in an historical chapel? Or having romantic stand-up reception on a palace terrace? Maybe a lively party with dancing in a magnificent ballroom? Residenzschloss Ludwigsburg offer plenty of choices if you dream about a gorgeous wedding venue for your big day.  In the elegant pavilion, you can have the bureaucratic blessing. If you look for a church wedding, you have two options to decide from. The castle terrace or the historical room will be ready for whatever you decide to come next. There is no way to go wrong with this luxurious castle and its surroundings.",
      owner: "E",
      city: "Ludwigsburg",
      country: "Germany",
      lon: " 9.1960",
      lat: "48.9007",
    },

    {
      _id: "11",
      name: "Schloss Koblenz,Germany",
      image: "/images/Schloss-Koblenz-Germany.jpg",
      price: 25000,
      countInStock:10,
      rating: 4.5,
      numReviews: 2,
      description:
        "A place full of historical memories, the Kurstfürstlichen Schloss Koblenz was a place where princes and princesses once resided. The official residence of the Prussian royal family was also inhabited, in the middle of the 19th century, by the later German Kaiser Wilhelm I with his wife Augusta. This setting can hardly be more representative, for a romantic and unforgettable wedding.The interior of the magnificent garden was restored in 2011, guarantying that history and modernity to be carefully connected. The rooms are equipped with the latest technology, although still keep all of their princely splendor. The various halls can accommodate small and large weddings comfortably, whether you want to dine in a cozy atmosphere or plan a glittering ball night with hundreds of guests. Civil ceremonies are also offered in the castle since September 2012, making the full experience complete.",
      owner: "B",
      city: "Koblenz",
      country: "Germany",
      lon: "7.604660",
      lat: "50.359752",
    },
    {
      _id: "12",
      name: "Schloss Neetzow,Germany",
      image: "/images/Schloss-Neetzow-Germany.jpg",
      price: 32000,
      countInStock:10,
      rating: 4.0,
      numReviews: 1,
      description:
        "The small town Neetzow is not so easy to find on the map. But this castle make it worth the work. From the main road you cannot see the Schloss Neetzow hidden behind tall trees, but when you see it, the building  is anything but inconspicuous. Build in 1848, in the style of English country homes, it was one of the few constructions preserved during the GDR era. Many items such as the magnificent fireplaces are still original.Upon entering the entrance hall you can still feel the splendor of the old days, specially with figures and ornaments from the Renaissance period. The artful parquet mosaic floor in all rooms is also immediately apparent. The view from the gallery into the circular space is particularly fascinating. Also, the Neetzow Castle is surrounded by a natural landscape park, which is protected by foreign woody plants, and a lake.This fabulous castle is ideal for elopement in Germany or for a great wedding. In quiet surroundings, you can get married like prince and princess. The restaurants offers a romantic atmosphere for up to 85 guests. The intimate ambience is enhanced by the beautiful wooden ceiling and attractive furniture. And you still have guest rooms for those who want to spend the night. It’s hard to decide one of these venues for a destination wedding in Germany",
      owner: "C",
      city: "Neetzow",
      country: "Germany",
      lon: "53.88333 ",
      lat: " 13.41667",
    },

    // {
    //   _id: "13",
    //   name: "Seeschloss Monrepos,Germany",
    //   image: "/images/Seeschloss-Monrepos-Germany.jpg",
    //   price: 11200,
    //   countInStock:10,
    //   rating: 4.7,
    //   numReviews: 3,
    //   description:
    //     "The festively decorated domed hall with a view of the castle park is an unique wedding location in Ludwigsburg. Surrounded by 250 hectares of beautiful nature, the baroque Seeschloss Monrepos is located in the domain of the house Württemberg. Only 20km from the center of the Baden-Württemberg state capital Stuttgart, it is the perfect location for unique wedding celebrations. No matter if you want to have a marriage proposal, a civil lunch, a big Wedding celebration or an anniversary wedding day. The event team will help you plan and organize everything: delicious food, fine wines and drinks, decoration, music, entertainment, wedding carriage, fireworks and many more special details for you and your guests. Practicality and beauty put together in a way that will guarantee your big day to be an unforgettable event.",
    //   owner: "C",
    //   city: "Ludwigsburg",
    //   country: "Germany",
    //   lon: "9.1695",
    //   lat: "48.9197",
    // },
    // {
    //   _id: "14",
    //   name: "Schloss Solitude,Germany",
    //   image: "/images/Schloss-Solitude-Germany.jpg",
    //   price: 13000,
    //   countInStock:10,
    //   rating: 4.4,
    //   numReviews: 4,
    //   description:
    //     "Are you looking for a wedding in an unforgettable atmosphere and with an idyllic view? Considered one of the most beautiful castles in Baden-Württemberg, Schloss Solitude might be the perfect place for you. Duke Carl Eugen built this precious castle in the 18th century filled with his extraordinary tastes of a cheerful landlord. You can choose between the exquisite White Room, the spectacular outdoor area on the Solitude or even use the castle’s own historic chapel. The hard part will be to choose just one!",
    //   owner: "A",
    //   city: "Stuttgart",
    //   country: "Germany",
    //   lon: "9.083832998",
    //   lat: "48.785496858",
    // },
  ],
};

export default data;