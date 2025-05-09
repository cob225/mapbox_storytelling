var config = {
    style: 'mapbox://styles/calumobrien/cm98v4ff3002f01sa2tcsbyl8',
    accessToken: 'pk.eyJ1IjoiY2FsdW1vYnJpZW4iLCJhIjoiY205OHJpaGFzMDV3OTJzcHRzczhlN2dmcSJ9.6pl_9t7JlQKauzPg0A9DnA',
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
            image: './assets/thesis_image.jpg',
            description: 'This project explores how movement, trade, and geography shape power dynamics in Southern literature. Using *The Color Purple*, *As I Lay Dying*, and *Salvage the Bones*, we mapMapping data from Their Eyes Were Watching God, The Color Purple, and Salvage the Bones found similarities in the relationship between gender and economic power. For instance, the female-to-male ratio of purchases in all three novels consistently demonstrated that men dominated economic activity, particularly in settings where control and survival were central themes. Even in works with female protagonists, such as The Color Purple, economic transactions are mainly handled by men, suggesting a gap between narrative focus and material authority. While these digital tools helped me represent power through movement and transaction, they also revealed what the data did not. Emotional transformation, symbolic action, and power structures unrelated to purchasing or selling.  how gender, race, and class intersect in space.',
            location: {
                center: [-90, 35],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'Mapping Gendered Power in the South',
            alignment: 'right',
            hidden: false,
            title: 'Celie in Georgia',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'One of the most obvious findings from the maps is that male characters are overwhelmingly the economic actors, especially in Salvage the Bones and The Color Purple. In lower Mississippi, where Salvage the Bones takes place, the majority of purchases are done by men. Similarly, purchases in The Color Purple were nearly exclusively made by men in Georgia and Liberia. The data for The Color Purple also included no "purchased" entries for female characters, emphasizing Celies early economic obscurity. Whats notable is that, despite being the storys narrator and emotional focus, Celie rarely participates in the worlds economic structure, at least in formal transactions.',
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
            title: 'Colonial Connections: Olinka',
            image: './assets/firestone_farm.jpg',
            description: 'Nettie’s letters from Africa reveal that "the Olinka do not believe girls should be educated." Even globally, gendered oppression connects the South to colonial spaces through missionary work and rubber trade.',
            location: {
                center: [-10.378889, 6.251275],
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
            title: 'Darl’s Journey in *As I Lay Dying*',
            image: './assets/as_i_lay_dying.jpg',
            description: 'Darl travels across Yoknapatawpha County but remains emotionally distant. His internal dislocation is echoed in the fractured journey. "I dont know what I am. I dont know if I am or not."',
            location: {
                center: [-89.4, 33.5],
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
            title: 'Sofia’s Resistance',
            image: './assets/color_purple_field.jpg',
            description: '"Hell no." Sofia’s refusal to submit to Miss Millie results in incarceration. Her movement is suddenly restricted, showing how resistance meets violent spatial control.',
            location: {
                center: [-91.0, 32.0],
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
            title: 'Salvage the Bones: Esch in Mississippi',
            image: './assets/salvage_dogfight.jpg',
            description: 'Esch’s world is bounded by poverty, climate, and pregnancy. Movement is mostly circular—between home, pit, and woods—symbolizing limited economic escape.',
            location: {
                center: [-89.2, 30.5],
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
            title: 'Mapping Economic Activity by Gender',
            image: './assets/gender_trade_graphic.jpg',
            description: 'Mapped trades in *The Color Purple* show men mostly control formal trade (farming, property), while women barter in hidden or domestic economies. This imbalance affects their geographic agency.',
            location: {
                center: [-90.5, 33.3],
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
            title: 'Where the Data Falls Short',
            image: './assets/gap.jpg',
            description: 'Our maps can show where characters go—but not how they feel. Data misses pain, silence, and emotion: Celie’s interior life, or Esch’s grief, cannot be plotted with latitude.',
            location: {
                center: [-90, 35],
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
            title: 'Gendered Confinement: Houses as Traps',
            image: './assets/house_interior.jpg',
            description: 'Celie and Addie Bundren both suffer inside homes that silence them. We map confinement—not just movement—as part of their economic and gendered story.',
            location: {
                center: [-89.9, 32.3],
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
            title: 'Reclaiming Space at the End',
            image: './assets/color_purple_reunion.jpg',
            description: 'Celie’s home becomes hers at last. "I’m pore, I’m black, I may be ugly... but I’m here." Her final geographic rootedness is also emotional and economic reclamation.',
            location: {
                center: [-83.6, 32.6],
                zoom: 6.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo'
        },
        {
            id: 'conclusion',
            alignment: 'centered',
            hidden: false,
            title: 'Conclusion: What Maps Can—and Can’t—Show',
            description: 'Spatial data helps uncover hidden patterns of control, resistance, and labor in Southern literature. But emotion, silence, and interiority are harder to chart. Maps should prompt deeper readings, not replace them.',
            location: {
                center: [-90, 35],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo'
        }
    ]
};
