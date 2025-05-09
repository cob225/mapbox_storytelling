var config = {
    style: 'mapbox://styles/calumobrien/cm98v4ff3002f01sa2tcsbyl8',
    accessToken: 'YOUR_ACCESS_TOKEN_HERE', // Replace with your actual Mapbox access token
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'blue'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'Mapping Project',
    subtitle: 'Spatial Journeys across the South 2',
    byline: 'OBrien',
    footer: 'Source: Novel texts, historical references. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro-thesis',
            alignment: 'centered',
            hidden: false,
            title: 'Introduction',
            image: './assets/mackethan-headerimage2_0.webp',
            description: 'This project explores how movement, trade, and geography shape power dynamics in Southern literature. Using <em>The Color Purple</em>, <em>As I Lay Dying</em>, and <em>Salvage the Bones</em>, we map how gender, race, and class intersect in space. Mapping data from <em>Their Eyes Were Watching God</em>, <em>The Color Purple</em>, and <em>Salvage the Bones</em> revealed similarities in the relationship between gender and economic power. For instance, the female-to-male ratio of purchases in all three novels consistently demonstrated that men dominated economic activity, particularly in settings where control and survival were central themes. Even in works with female protagonists, such as <em>The Color Purple</em>, economic transactions are mainly handled by men, suggesting a gap between narrative focus and material authority. While these digital tools helped me represent power through movement and transaction, they also revealed what the data did not: emotional transformation, symbolic action, and power structures unrelated to purchasing or selling.',
            location: {
                center: [-89.085766, 30.400424],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Mapping Gendered Power In The South',
            image: './assets/Copy-of-Featured-Image-rupaul-9-1.png',
            description: 'One of the most obvious findings from the maps is that male characters are overwhelmingly the economic actors, especially in <em>Salvage the Bones</em> and <em>The Color Purple</em>. In lower Mississippi, where <em>Salvage the Bones</em> takes place, the majority of purchases are done by men. Similarly, purchases in <em>The Color Purple</em> were nearly exclusively made by men in Georgia and Liberia. Even in books where female characters are the main protagonists, male dominance in economic activity persists. The data for <em>The Color Purple</em> also included no "purchased" entries for female characters, emphasizing Celie\'s early economic obscurity.',
            location: {
                center: [-83.5573651, 32.5573651],
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'Eatonville and the Performance of Male Power',
            image: './assets/firestone_farm.jpg',
            description: 'In contrast, <em>Their Eyes Were Watching God</em> had a higher male-to-female buying ratio, particularly in Eatonville and Orlando. Although male interactions remained dominant, Florida\'s geography demonstrated greater economic agency among women than in the other novels. Joe Starks\' acquisition of 200 acres in Eatonville and decision to put a streetlamp are symbolic acts. “But Ah wants to give a speech with the rest of y’all. But it’s no use for me to try to stay dry for so long. The rest of y’all can stand around and look.” This is more than just buying land; it\'s about establishing authority and being visible. Eatonville has the closest male-to-female buying ratio in the sample, yet Joe remains the major player, utilizing his economic power to quiet Janie.',
            location: {
                center: [-81.5333, 28.6125],
                zoom: 8,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'chapter-three',
            alignment: 'right',
            hidden: false,
            title: 'Where Women Disappear from the Map',
            image: './assets/as_i_lay_dying.jpg',
            description: 'The data for <em>The Color Purple</em> is particularly noticeable in its absences because no female "purchased from" data were reported. Celie\'s description of the stamps used to mail letters "Little fat queen of England stamps" shows a woman participating with a global communication and empire. However, the database only registers this as a male transaction, which could be a mistake in the data provided.',
            location: {
                center: [-9.903750, 6.345389],
                zoom: 6.2,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'chapter-four',
            alignment: 'left',
            hidden: false,
            title: 'Silencing as a Transactional Act',
            image: './assets/color_purple_field.jpg',
            description: 'Joe\'s unwillingness to allow Janie to speak at the store\'s opening isn\'t depicted on the map, but it defines Janie\'s public role. "Thank yuh fuh yo\' compliments, but mah wife don\'t know nothin\' \'bout no speech-makin\'." This comment is not about money or movement, yet it does reinforce a gendered barrier just as powerfully as the one demonstrated through the data. Social expectation and emotional control can also influence one\'s freedom in terms of economic access.',
            location: {
                center: [-81.5333, 28.6125],
                zoom: 6.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'chapter-five',
            alignment: 'right',
            hidden: false,
            title: 'Favors that Don’t Fit the Form',
            image: './assets/salvage_dogfight.jpg',
            description: 'Some economic exchanges fall into relational gray areas. When “Anyhow, I got a ride into town,” is said in The Color Purple it raises a question: Is that a service, a favor, or simply kindness? These acts of support are not easily mapped, but they convey trust and relational economy, especially for women who lack formal purchasing power. These exchanges matter, but they don’t appear in our current data structure, pointing to the limits of spreadsheets in their capturing.',
            location: {
                center: [-83.283663, 33.112203],
                zoom: 6.5,
                pitch: 45,
                bearing: 15
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'chapter-six',
            alignment: 'left',
            hidden: false,
            title: 'Tracking Emotional Labor',
            image: './assets/gender_trade_graphic.jpg',
            description: 'Throughout The Color Purple, women perform enormous emotional labor by raising children, providing care, and supporting one another. These acts require time, energy, and spirit while leaving no trace in the purchase data. This is quite strange because raising a child would require some purchase data in a lot of ways. What if we had a field called "emotional exchange" or "relational labor"? The maps would appear vastly different and more accurately reflect how power and caring flow in the text.',
            location: {
                center: [-9.903750, 6.345389],
                zoom: 6.5,
                pitch: 30,
                bearing: -30
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'gender-trade-layer', opacity: 1 }
            ],
            onChapterExit: [
                { layer: 'gender-trade-layer', opacity: 0 }
            ]
        },
        {
            id: 'chapter-seven',
            alignment: 'right',
            hidden: false,
            title: 'Masculine Survival in Salvage the Bones',
            image: './assets/gap.jpg',
            description: 'In Salvage the Bones, male purchases dominate the data set. The men trade candies, food, and school supplies, but what they truly exchange is pride, survival, and control. Even youthful interactions have territorial implications. These purchases are modest, but they evoke the emotional intensity of scarcity. Female characters make almost no purchases on the map, highlighting how men control resources at the most basic levels.',
            location: {
                center: [-83.5573651, 32.5573651],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'chapter-eight',
            alignment: 'left',
            hidden: false,
            title: 'What the Numbers Miss',
            image: './assets/house_interior.jpg',
            description: 'The maps reveal the systems of economic and spatial power, but they lack emotional resonance. In Salvage the Bones, exchanges frequently involve loyalty, humiliation, or love. In The Color Purple, rides and presents are acts of solidarity. In Their Eyes Were Watching God, quiet is firmly imposed. These items do not fall under the "purchased by" category, yet nevertheless have an equally significant impact on the narrative. A really literary dataset would include emotional tone, symbolic significance, and relational dynamics, in addition to money and geography.',
            location: {
                center: [-83.5573651, 32.5573651],
                zoom: 6.2,
                pitch: 30,
                bearing: -20
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'chapter-nine',
            alignment: 'right',
            hidden: false,
            title: 'Conclusion',
            image: './assets/color_purple_reunion.jpg',
            description: 'Mapping Southern literature has impacted my perspective on gender, space, and the economy. The overwhelming male control over purchases in all three novels, particularly in Salvage the Bones and The Color Purple, demonstrates how access to resources reflects greater power dynamics. It\'s worth noting that, even in a novel like The Color Purple, in which a woman narrates her own journey, economic power is often external to her. Spatial storytelling lets us see who moves, who buys, and who matters materially—but also reminds us of what stories and maps leave out.',
            location: {
                center: [-90, 35],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo'
        }
    ]
};
