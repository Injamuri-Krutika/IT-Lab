'use strict';

function changeEventsContent(contentId) {
    console.log(contentId);
    content = document.getElementById("content");
    switch (contentId) {
        case 1:
            document.getElementById("content").innerHTML = "<table width='80%'> <tbody><tr> <td> </td></tr> <tr> <td> </td></tr>              <tr>                      <td><div >                    <a href='seminars/seminar11june2018.pdf'> <h4><b> Remotely Sensed Image Analysis using Machine Learning Methodologies</b></h4>	                   </a>           Prof. Susmitha Gosh (De)         <br>         Department of Computer Science &amp; Engineering, Jadavpur University, Kolkata               <br>                On 11 June, 2018 at 11:00 a.                 <br>Venue: Seminar Room, SCIS.<br/><br/></div></td></tr><tr><td><div class='main_news'><a href='seminars/prephd9may2018.jpg'> <h4><b> Tamper Detection Techniques for Enhancing Video Surveillance Systems</b></h4>	</a> Pre-Ph.D Seminar of Mrs. Sitara K.<br>14MCPC13.<br> On 09 May, 2018 at 11:00 a.m<br>: Seminar Room, SCIS.<br/><br/></div></td></tr> <tr> <td><div class='main_news'><a href='seminars/prephd8may2018.jpg'> <h4><b> Novel Techniques for Confidence Based and Multi-Criteria Recommender Systems</b></h4></a>Pre-Ph.D Seminar of Mr. Venkateswara Rao Kagita<br>14MCPC23.<br> On 08 May, 2018 at 11:00 a.m<br>	 Venue: Seminar Room, SCIS. <br/><br/></div></td> </tr> </tbody></table>";

            break;
        case 2:

            document.getElementById("content").innerHTML = "<table width='80%'><tbody><tr> <td> </td></tr><tr> <td> </td></tr><tr> <td><div class='main_news'><a href='seminars/prephd27july2018.jpg'> <h4><b> Collaborative Filtering and Multi-Label Classification with Matrix Factorization</b></h4>	</a>Ph.D Viva-Voce of Mr. Vikas Kumar<br>14MCPC07.<br> On 27 July, 2018 at 2:30 P.<br>	Venue: Seminar Room, SCIS.<br/><br/></div></td></tr> <tr> <td><div class='main_news'><a href='seminars/prephd23july2018.jpg'> <h4><b> Efficient User Authentication and Key Establishment Protocols for Wireless Sensor Networks &amp; Internet of Things</b></h4>	</a>Ph.D Viva-Voce of Mr. Anup Kumar Maurya<br>13MCPC18.<br> On 23 July, 2018 at 11:00 A.M<br>	Venue: Seminar Room, SCIS.<br/><br/></div></td></tr> <tr> <td><div class='main_news'><a href='seminars/prephd20july2018.jpg'> <h4><b> Prediction and Recommendation with Confidence in Collaborative Filtering Recommender Systems</b></h4>	</a>Ph.D Viva-Voce of Ms. T.V.R.Himabindu<br>12MCPC04.<br> On 20 July, 2018 at 2:00 P.M<br>	Venue: Seminar Room, SCIS.</div></td></tr> </tbody></table>"
            break;
        case 3:
            document.getElementById("content").innerHTML = "<table width='80%'> <tbody><tr> <td> </td></tr> <tr> <td> </td></tr>              <tr>                      <td><div >                    <a href='seminars/seminar11june2018.pdf'> <h4><b> Remotely Sensed Image Analysis using Machine Learning Methodologies</b></h4>	                   </a>           Prof. Susmitha Gosh (De)         <br>         Department of Computer Science &amp; Engineering, Jadavpur University, Kolkata               <br>                On 11 June, 2018 at 11:00 a.                 <br>Venue: Seminar Room, SCIS.<br/><br/></div></td></tr><tr><td><div class='main_news'><a href='seminars/prephd9may2018.jpg'> <h4><b> Tamper Detection Techniques for Enhancing Video Surveillance Systems</b></h4>	</a> Pre-Ph.D Seminar of Mrs. Sitara K.<br>14MCPC13.<br> On 09 May, 2018 at 11:00 a.m<br>: Seminar Room, SCIS.<br/><br/></div></td></tr> <tr> <td><div class='main_news'><a href='seminars/prephd8may2018.jpg'> <h4><b> Novel Techniques for Confidence Based and Multi-Criteria Recommender Systems</b></h4></a>Pre-Ph.D Seminar of Mr. Venkateswara Rao Kagita<br>14MCPC23.<br> On 08 May, 2018 at 11:00 a.m<br>	 Venue: Seminar Room, SCIS. <br/><br/></div></td> </tr> </tbody></table>";

            break;
        case 4:

            document.getElementById("content").innerHTML = "<table width='80%'><tbody><tr> <td> </td></tr><tr> <td> </td></tr><tr> <td><div class='main_news'><a href='seminars/prephd27july2018.jpg'> <h4><b> Collaborative Filtering and Multi-Label Classification with Matrix Factorization</b></h4>	</a>Ph.D Viva-Voce of Mr. Vikas Kumar<br>14MCPC07.<br> On 27 July, 2018 at 2:30 P.<br>	Venue: Seminar Room, SCIS.<br/><br/></div></td></tr> <tr> <td><div class='main_news'><a href='seminars/prephd23july2018.jpg'> <h4><b> Efficient User Authentication and Key Establishment Protocols for Wireless Sensor Networks &amp; Internet of Things</b></h4>	</a>Ph.D Viva-Voce of Mr. Anup Kumar Maurya<br>13MCPC18.<br> On 23 July, 2018 at 11:00 A.M<br>	Venue: Seminar Room, SCIS.<br/><br/></div></td></tr> <tr> <td><div class='main_news'><a href='seminars/prephd20july2018.jpg'> <h4><b> Prediction and Recommendation with Confidence in Collaborative Filtering Recommender Systems</b></h4>	</a>Ph.D Viva-Voce of Ms. T.V.R.Himabindu<br>12MCPC04.<br> On 20 July, 2018 at 2:00 P.M<br>	Venue: Seminar Room, SCIS.</div></td></tr> </tbody></table>"
            break;


        default:
            break;
    }

}