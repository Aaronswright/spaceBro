/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-US': {
        translation: {
            FACTS: ['Mercury and Venus are the only two planets in our solar system that do not have any moons.',
                'If a star passes too close to a black hole, it can be torn apart.',
                'The hottest planet in our solar system is Venus. Most people often think that it would be Mercury, as it’s the closest planet to the sun. This is because Venus has a lot of gasses in its atmosphere, which causes the “Greenhouse Effect".',
                'The solar system is around 4.6 billion years old. Scientist estimate that it will probably last another 5000 million years',
                'Enceladus, one of Saturn’s smaller moons, reflects some 90% of the sunlight, making it more reflective than snow!',
                'The highest mountain known to man is the Olympus Mons, which is located on Mars. It’s peak is 15 miles (25KM) high, making it nearly 3 times higher than Mt Everest.',
                'The Whirlpool Galaxy (M51) was the very first celestial object to be identified as being spiral.',
                'A light year is the distance covered by light in a single year, this is equivalent to 5.88 trillion miles (9.5 trillion KM)!',
                'The width of the Milky Way is around 100,000 light years.',
                'The Sun is over 300,000 times larger than Earth.',
                'Footprints and tire tracks left by astronauts on the moon will stay there forever as there is no wind to blow them away.',
                'Because of lower gravity, a person who weighs 100kg on earth would only weigh 38kg on the surface of Mars.',
                'Scientists believe there are 67 moons that orbit Jupiter, however only 53 of these have been named.',
                'The Martian day is 24 hours 39 minutes and 35 seconds.',
                'NASA’s Crater Observation and Sensing Satellite (LCROSS) declared that they have found evidence of significant amounts of water on the Earth’s Moon.',
                'The Sun makes a full rotation once every 25-35 days.',
                'Venus is the only planet that spins backwards relative to the other planets.',
                'The force of gravity can sometimes cause comets to tear apart.',
                'It is thanks to the Sun and our own moons gravity that we have high and low tides.',
                'Pluto is smaller than the Earth’s moon!',
                'According to mathematics, white holes are possible, although as of yet, we have found none.',
                'Our moon is around 4.5 billion years old.',
                'There are more volcanoes on Venus than any other planet within our solar system.',
                'Uranus’ blue glow is down to the methane in its atmosphere, which filters out all the red light.',
                'The four planets in our solar system that are known as gas giants are Jupiter, Neptune, Saturn and Uranus.',
                'Uranus has 27 moons that have been discovered so far.',
                'Because of its unique tilt, a single night on Uranus lasts for 21 years!',
                'Triton, one of Neptune’s moons, is gradually getting closer to the planet it orbits.',
                'Scientists say that eventually Triton will get so close to Neptune, it will be torn apart by gravity, and Neptune could end up with more rings than Saturn currently has!',
                'The only large moon in our solar system to orbit in the opposite direction of its planet is Neptune’s moon, Triton.',
                'Neptune takes 164.79 years (60,190 days) to make one orbit of the Sun. this means that since it’s discovery in 1846, it has only completed just one orbit!',
                'Charon is one of the moons of Pluto, and is only slightly smaller than Pluto itself.',
                'The Space Station is the largest manned object ever sent into space.',
                'A day on Pluto lasts for 6 days and 9 hours.',
                'Saturn is the second largest planet in our solar system.',
                'Any free-moving liquid in outer space will form itself into a sphere, because of its surface tension.',
                'Earth, Mars, Mercury and Venus are called the inner planets as they are closest to the sun.',
                'We know more about space than we do about deep in our oceans.',
                'The only satellite that Britain has launched was called Black Arrow.',
                'Black Arrow was developed during the 1960’s and was used for four launches between 1969 and 1971.',
                'The light takes 8.3 minutes to travel from the Sun the Earth.',
                'The odds of being killed by space debris is 1 in 5 billion.',
                'The Earth’s revolution time increases .0001 seconds annually.',
                'If you were driving at 75 miles (121 km) per hour, it would take 258 days to drive around one of Saturn’s rings.',
                'The first man on the moon was Neil Armstrong.',
                'The Space Station circles the earth every 90 minutes.',
                'Stars seem to twinkle in the night sky due to the light being disrupted as it passes though the Earth’s atmosphere.',
                'Neil Armstrong first stepped on the moon with his left foot.',
                'There are three main types of galaxies out in space, and they are spiral, elliptical, and irregular.',
                'There are approximately 200,000,000,000 stars in the Milky Way.',
                'In the northern skies, you are able to see two galaxies. These are the Andromeda Galaxy (M31), and the Triangulum Galaxy (M33).',
                'The planet with the most moons in our galaxy is Jupiter, with 67.',
                'The closest galaxy to us is the Andromeda Galaxy.',
                'The first Supernovae that was observed outside of our own galaxy was the S Andromeade, in the Andromeda galaxy in 1855.',
                'The Andromeda Galaxy appears in the night sky as a smudge of light, and is in fact the most furthest away object in the night sky that you can see with your eyes.',
                'The distance between the Sun and Earth is defined as an Astronomical Unit, or AU for short.',
                'The second man on the moon was Buzz Aldrin.',
                '“Moon” was Buzz Aldrin’s mother’s maiden name.',
                'The Mariner 10 is the only spacecraft that has ever visited the planet Mercury. It managed to take pictures of about 45% of the surface.',
                'If you shouted in space even if someone was right next to you they wouldn’t be able to hear you.',
                'February in 1865 and 1999 are the only months in recorded history not to have a full moon.',
                'Due to the lack of gravity in space, astronauts can grow approximately two inches in height.',
                'The Kuiper Belt is a region of the Solar System beyond the orbit of Neptune.',
                'The first woman in space was a Russian called Valentina Tereshkova.',
                'There are currently 166 moons in our solar system.',
                'The largest star known to man is R136a1, which has a mass of 265-320 times that of our sun!',
                'The first artificial satellite in space was called sputnik.',
                'The furthest away galaxy from Earth, that has been discovered, is GRB 090423, which is 13.6 billion light years away! This means that the light we see from it began its journey only 600,000 years after the Universe was created!',
                'The largest black hole known to man is the Quasar OJ287, and has an expected mass of 18 billion times that of our own sun.',
                'Our moon is moving away from Earth at a rate of 4cm (1.6 Inches) per year! (Read More)',
                'Pluto is named after the Roman god of the underworld, not the Disney Dog.',
                'The Sun is the largest object in our solar system.',
                'When fully constructed, the Space Station will be visible for more than 90% of the Earth’s population.',
                'Although Saturn is the second largest planet in our solar system, it is also the lightest planet!',
                'Asteroids are the byproducts of formations in the solar system, more than 4 billion years ago.',
                'Astronauts cannot burp in space!',
                'As there is no air in space, no one is able to hear each other speak – as the air is needed to carry the sound vibrations.',
                'Uranus was originally called “George’s Star”.',
                'The Sun loses up to a billion kilogrammes per second due to the solar winds.',
                'As Saturn has a very low density, if you were able to put it into water, it would float!',
                'The mass of the Moon is about one-eightieth of the Earth’s mass.',
                'The first living mammal to ever go into space was a dog named “Laika” from Russia.',
                'The term “astronaut” is derived from the Greek words Ã¡stron, meaning “star”, and nautes, which means “sailor”. So, the word astronaut means star sailor!',
                'All together, the space travellers have spent just over 30,400 days (83 years) in space!',
                'Sergei K. Krikalevo has spent more time in space than anyone else. He has racked up a total of 803 days, 9 hours and 39 minutes, which is equivalent to 2.2 years!',
                'Mercury has no atmosphere which means there is no wind or weather.',
                'Only 24 people have ever seen our whole planet from Space. However, thanks to Google Earth, which has now been downloaded over 500 million times, we can add a few more to that original number!',
                'Red Dwarf stars that are low in mass can burn continually for up to 10 trillion years!',
                'There is an estimated 2 x 1023 stars in space. In English, this is: 200,000,000,000,000,000,000,000,000,000!',
                'Scientists used to believe that the same side of Mercury always faced the sun. Then in 1965 astronomers discovered that the planet rotates three times during every two orbits it makes.',
                'Jupiter is known as the dumping ground for our solar system, as a large percentage of asteroids are pulled in by Jupiter’s gravity.',
                'A day on Mercury is equivalent to 58 Earth days, and a year is equivalent to 88 days!',
                'As space has no gravity, normal pens won’t work!',
                'On average it takes the light only 1.3 seconds to travel from the moon to the earth.',
                'There are 88 recognised star constellations in our night sky.',
                'The centre of a comet is called a nucleus.',
                'As early as 240 B.C. the Chinese began to document the appearance of Halley’s Comet.',
                'In 2006, the International Astronomical Union reclassified Pluto as a dwarf planet.',
                'There are now 4 dwarf planets in the Solar System: Ceres, Pluto, Eris and Makemake.',
                'Buzz Lightyear has been out in space! He has spent 15 months on board the International Space Station, and returned to Earth on the 11th of September, 2009.'
              ],
            SKILL_NAME: 'Space Bro',
            GET_FACT_MESSAGE: "Space Bro has a fact for you: ",
            HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Live Long and Prosper!',
        },
    }
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('getFact');
    },
    'GetNewFactIntent': function () {
        this.emit('getFact');
    },
    'getFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
