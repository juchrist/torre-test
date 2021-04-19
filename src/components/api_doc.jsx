<h3>Introduction</h3>
<p>Know Nigeria is a platfrom that provides you with necessary information about all 36 Nigerian States. This page contains the official documentation for the KnowNigeria API.</p>

<h3>States</h3>

<p>To fetch data for all states at once,</p>
<code>
    url: http://knownigeria.com/api/v1/states
    method: GET
</code>

<p>You will have an Output like this:</p>

<p>
<code>
    [
    {
        "id": "1",
        "name": "Abia ",
        "state_capital": "Umuahia",
        "population": "3,727,347",
        "governor_id": "1",
        "ethnic_groups": "Igbo",
        "state_code": "ABI",
        "description": "Abia State, home to Enyimba Football Club of Aba, two time African Champion league winners (2003 & 2004) was created on 27th August, 1991, by the then Federal Military Government under General lbrahim Babangida, out of Imo State.\n\n\"Abia\" is an acronym formed from the initial letters of four groups of people, namely:\n\nAba, Bende, lsuikwuato and Afikpo. These constituted the major groups in the state at its creation.\n\nLocated in the southeastern region of Nigeria, Abia State lies within approximately latitudes 4? 40' and 6? 14' north, and longitudes 7? 10' and 8? east.\nThe state shares common boundaries to the north with Ebonyi State; to the south and southwest with Rivers State; and to the east and southeast with Cross River and Akwa lbom States respectively. To the west is Imo State, and to the northwest is Anambra State.\n\nThe state covers an area of about 5,243.7 sq. km which is approximately 5.8 per cent of the total land area of Nigeria. With its capital at Umuahia, it has seventeen LGAs (listed above).",
        "date_created": "27-Aug-91",
        "geo_political_zone": "South-East",
        "slogan": "God's Own State",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Abia_State_Government_seal.png/100px-Abia_State_Government_seal.png",
        "zip": "440001",
        "official_website": "http://www.abiastate.gov.ng"
    },
    {
        "id": "2",
        "name": "Adamawa ",
        "state_capital": "Yola",
        "population": "4,248,436",
        "governor_id": "2",
        "ethnic_groups": "Hausa, Fulani",
        "state_code": "ADA",
        "description": "Adamawa State was created on 27th August, 1991, by the then Federal Military Government under General lbrahim Babangida, out of the former Gongola State with Yola as it's capital. It has four administrative divisions namely: Adamawa, Ganye, Mubi and Numan. Major towns are Yola, Mubi, Ganye, Numan, Guyuk, Michika, Mayo-Belwa, Gombi and Jimeta. The state is shares her northern boundry with Borno State, east with Gombe State, south west with Taraba State and east with Cameroun Republic. The State derives its name from Madibbo Adama, a Fulani leader who led the 19th Century Jihad in Upper Benue Region. Modibbo Adama, the son of Ardo Hassan, was born at Wuro Chekke in Borno State around 1770. He had his early Islamic studies under his father and later pro- ceeded to Birnin Ngazargamu, then capital of Borno Empire, for further studies. Upper Benue area. He thus became a flag-bearer under-taking successive conquests to establish the kingdom of \"Fombina,\" referred to as Adamawa ruling family with the Palace of the Lamido, a first - class Chief, in the heart of the town. The Lamido is the chairman of the Adamawa Emirate Council. During the Islamic Jihad movement led by Shehu Usman Dan Fodio in the 19th Century, Modibbo Adama was recognised as a learned Moslem who could lead the crusade in the ",
        "date_created": "27-Aug-91",
        "geo_political_zone": "North-East",
        "slogan": "Land of Beauty",
        "image": "https://pbs.twimg.com/media/ECMDCHRWsAA1AOa.jpg",
        "zip": "640001",
        "official_website": "http://www.adamawa.gov.ng"
    },
    {
        "id": "3",
        "name": "Akwa Ibom ",
        "state_capital": "Uyo",
        "population": "5,482,177",
        "governor_id": "3",
        "ethnic_groups": "Ibibio, Annang, Ibeno and Eket",
        "state_code": "AKW",
        "description": "Akwa Ibom State was created on September 23, 1987, by the then Federal Military Government under General lbrahim Babangida, out of the then Akwa Ibom State with Uyo as it's capital. Akwa Ibom was created by combining the Uyo, Ikot Ekpene, Eket and Abak divisions of old Calabar province. Ikot Ekpene, Abak, Eket, Ibeno are a few of many prominent cities. Ibibio, Annang, Oron, Eket and Ibeno are the major languages. Akwa Ibom State is located in the south-east of the country, lying between latitudes 4?321 and 5?331 North, and longitudes 7?251 and 8?251 East. The State is bordered on the east by Akwa Ibom State, on the west by Rivers State and Abia State, and on the South by the Atlantic Ocean. Akwa Ibom State is made up of a homogeneous group of people believed to have originated from a single ancestral stock. The languages spoken in the state are closely related, and the Annang and Ibibio languages are mostly identical with a few dialectical differences. The Eket and Ibeno languages are more closely related to each other than to the other two, and are only partially understandable by speakers of the other two languages. The people are predominantly of the Christian faith although some native African religions are practised by some of the people.",
        "date_created": "23-Sep-87",
        "geo_political_zone": "South-South",
        "slogan": "Land of Promise",
        "image": "https://akwaibomstate.gov.ng/wp-content/uploads/2017/10/Akwa-Ibom-state.png",
        "zip": "520001",
        "official_website": "http://www.akwaibomstate.gov.ng"
    }, <i>...</i>
</code>
</p>

<p>
To fetch data for Individual States,

    <code>
        url: http://knownigeria.com/api/v1/states/<i>state_id</i>
        <i>OR</i>
        url: http://knownigeria.com/api/v1/states/<i>state_code</i>
        method: GET
    </code>

<br/>
e.g http://knownigeria.com/api/v1/states/3 will fetch the information about Akwa-Ibom State

    <code>
        {
            "id": "3",
            "name": "Akwa Ibom ",
            "state_capital": "Uyo",
            "population": "5,482,177",
            "governor_id": "3",
            "ethnic_groups": "Ibibio, Annang, Ibeno and Eket",
            "state_code": "AKW",
            "description": "Akwa Ibom State was created on September 23, 1987, by the then Federal Military Government under General lbrahim Babangida, out of the then Akwa Ibom State with Uyo as it's capital. Akwa Ibom was created by combining the Uyo, Ikot Ekpene, Eket and Abak divisions of old Calabar province. Ikot Ekpene, Abak, Eket, Ibeno are a few of many prominent cities. Ibibio, Annang, Oron, Eket and Ibeno are the major languages. Akwa Ibom State is located in the south-east of the country, lying between latitudes 4?321 and 5?331 North, and longitudes 7?251 and 8?251 East. The State is bordered on the east by Akwa Ibom State, on the west by Rivers State and Abia State, and on the South by the Atlantic Ocean. Akwa Ibom State is made up of a homogeneous group of people believed to have originated from a single ancestral stock. The languages spoken in the state are closely related, and the Annang and Ibibio languages are mostly identical with a few dialectical differences. The Eket and Ibeno languages are more closely related to each other than to the other two, and are only partially understandable by speakers of the other two languages. The people are predominantly of the Christian faith although some native African religions are practised by some of the people.",
            "date_created": "23-Sep-87",
            "geo_political_zone": "South-South",
            "slogan": "Land of Promise",
            "image": "https://akwaibomstate.gov.ng/wp-content/uploads/2017/10/Akwa-Ibom-state.png",
            "zip": "520001",
            "official_website": "http://www.akwaibomstate.gov.ng"
        }, <i>...</i>

    </code>
</p>




<h3>Local Governments</h3>
<p>
    To fetch data for all Local Governements in Nigeria,

    <code>
        url: http://knownigeria.com/api/v1/lgas, <br/>
        method: GET
    </code>


</p>

<p>
To fetch data for all Local Governements in a State,

    <code>
        url: http://knownigeria.com/api/v1/state/<i>state_id</i>/lgas, <br/>
        method: GET
    </code>
    e.g. http://knownigeria.com/api/v1/state/24/lgas, <br/>
    will return all LGAs for Lagos State

</p>

<p>
To fetch data for a specific Local Governement in Nigeria,

    <code>
        url: http://knownigeria.com/api/v1/lgas/<i>state_id</i>, <br/>
        method: GET
    </code>


</p>

<h3>Governors</h3>
<p>
    To fetch data for a Governor Details in Nigeria,

    <code>
        url: http://knownigeria.com/api/v1/state/<i>state_id</i>/governor, <br/>
        method: GET
    </code>
    e.g. http://knownigeria.com/api/v1/state/10/governor, <br/>
    will return all the governor of Delta State


</p>

<p>
To fetch data for all Local Governements in a State,


</p>

<p>
To fetch data for a specific Local Governement in Nigeria,

    <code>
        url: http://knownigeria.com/api/v1/lgas/<i>state_id</i>, <br/>
        method: GET
    </code>


</p>
