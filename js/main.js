/**
 * Use bootstrap panel classes to format FAQ easily.
 * Instead of hard-coding each panel, iteratively insert.
 * To update FAQ, simply add another FAQ object to the faq_obj list or modify the
 * existing Q&A pairs.
 */

$(document).ready(function() {
    // Store FAQ as list of objects with question and answer attributes
    let faq_obj = [
        {"question":"What's it like to be an LDS student at Harvard?",
            "answer":"Harvard is a " +
                "fantastic place to build and strengthen a testimony and get a " +
                "world-class education. The university has a " +
                "long tradition of having Latter-day Saints on its campus; many members " +
                "of the church have studied and/or taught here, including John A. " +
                "Widstoe, Kim Clark, Robert D. Hales, and Henry B. Eyring. The administration " +
                "and other Harvard students " +
                "are very respectful of LDS students' standards. Most Harvard students " +
                "and faculty already have had LDS acquaintances, co-workers, and " +
                "friends here on campus. If you stay true to who you are, you will thrive " +
                "here."},
        {"question":"How many Latter-day Saint undergraduates are there at Harvard?",
            "answer":"Harvard averages between 30-45 LDS undergraduates. We welcome freshman every year from " +
                "all over the US and even internationally! It is " +
                "always a diverse and supportive group. There are also many LDS " +
                "students at Harvard’s graduate schools."},

        {"question":"Where do LDS Harvard students attend church?",
            "answer":"Undergraduates attend the Mt. Auburn Young Single Adults Ward, made up of about 150 " +
                "young single adults including students from from MIT, Tufts, Boston University, Boston College, " +
                "New England Conservatory, Berklee, and other area schools. The meetinghouse is " +
                "less than a ten minute walk from Harvard Yard. There are two singles wards that " +
                "meet at that chapel, attracting young adults from all over the greater Boston area. " +
                "The ward sponsors regular trips to the Boston Temple, and holds weekly " +
                "family home evening groups and other fun activities, including some date nights. " +
                "The ward is exceptionally diverse in terms of everyone's background " +
                "and interests, and you will have the support of committed members with strong " +
                "testimonies. It is a great place to meet people, make friends, and find people " +
                "to date."},

        {"question":"Are there Institute classes available nearby?",
            "answer": `Yes. Multiple Institute classes are held on Harvard's campus every week. In addition, 
            the Institute teaches a number of other classes at the local meetinghouse. The Institute also 
            holds regular activities, dances, and service projects. See <a href="https://www.churchofjesuschrist.org/si/institute">here</a> for more information about institute.`},

        {"question":"What kind of activities does the Harvard LDSSA have?",
            "answer":"The LDSSA sponsors a number of activities every year. We've organized fall and spring retreats " +
                "the past several years and hold regular forums featuring some of Harvard's LDS affiliates, including " +
                "Pulitzer Prize-winning History Professor Laurel Ulrich and Kennedy School Professor Roger Porter. " +
                "Harvard offers a wealth of activities, and LDS students often get together informally to take " +
                "advantage of them."},

        {"question":"What are the LDSSA members like?",
            "answer":"We're a diverse bunch of people from many different places! Many of us have" +
                " served missions. Our concentrations (majors) range from Philosophy to" +
                " Neuroscience to Art History to Engineering. Some of us play on sports teams," +
                " and we're all involved in extracurricular activities -- from orchestras to choirs" +
                " to clubs to service organizations. We're really friendly and enjoy getting together" +
                " for good, clean fun."},

        {"question":"Can I arrange to have an LDS roommate?",
            "answer":"Freshmen are assigned rooms without regard to religion, but it has" +
                " happened in the past that LDS freshmen have been roommates with each" +
                " other. In any case, Harvard Yard is a cozy environment, so you are never far" +
                " from other LDS students. After freshman year, students may choose their" +
                " roommates. It is very common that LDS students room together from sophomore to" +
                " senior year."},

        {"question":"What do I do if I want to serve a mission?",
            "answer":"Harvard is great about accommodating students who want to serve missions" +
                " before graduating. Students desiring to serve missions simply inform their" +
                " Freshman Dean (if leaving after their freshman year) or Senior Tutor" +
                " (if later) of their decision and arrange for a leave of absence. Altogether," +
                " it takes about thirty minutes to make the necessary arrangements to go on a" +
                " mission, and less paperwork than dropping a class! Returning to Harvard" +
                " after a mission is equally easy. Students are assigned to upper-class houses" +
                " near the end of freshman year and usually submit housing preferences to those" +
                " houses that will be honored when the student returns. There is absolutely no" +
                " stigma associated with taking time off. Many non-LDS students take time" +
                " off to pursue their own special interests. Most members of the Harvard" +
                " community agree that the time off makes them better students when they return."},
        {"question":"How many LDS students are there at Harvard compared to other Ivy League" +
                " schools?",
            "answer":"From what we understand, Harvard has the largest number of LDS students out" +
                " of all the Ivy League schools. They have great programs too, though!"},
        {"question":"How can I get in touch with you?",
            "answer":"Email us! Please, we’d love to hear from you and answer your questions. Board members are listed " +
                "on the contact page and can be reached by emailing harvardcollegeldssa@gmail.com."},
        {"question":"What is the social life like as a Harvard undergrad?",
            "answer":"Whatever your particular interests, Harvard itself and Boston in general offer more than you could " +
                "possibly do in four years' time! Harvard students are generally very outgoing, and the student body is " +
                "so diverse that you’ll easily be able to find a group of friends. You can always find " +
                "something to do on the weekends. The truth is that Harvard students are often so involved " +
                "in their activities of choice that they spend their weekends pursuing them. When they have free time, " +
                "many students at Harvard enjoy a night at the " +
                "theater, Fenway Park, just hanging out, or even, maybe, studying. Harvard has a number " +
                "of really fun campus-wide dances each semester as well. Weekends do not have to be expensive; " +
                "there are many free and low-cost events in the area."},
        {"question":"If I want to visit campus, can I stay with an LDS student?",
            "answer":"Absolutely! We’d love to have you stay with us! Email us ahead of time, and we will arrange it."},
        {"question":"How do I apply to Harvard?",
            "answer":"Information about what is required for a complete application can be found on the " +
                "<a id='exception-link' href='https://college.harvard.edu/admissions/apply'>Harvard website</a>. Good luck and we hope we see you here in Cambridge!"},
    ];

    faq_obj.forEach(function (obj, i) {
        $("#accordion").append(`<div class="panel panel-default">
              <div class="panel-heading">
                <h6 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse${i}">
                    ${obj["question"]}</a>
                </h6>
              </div>
              <div id="collapse${i}" class="panel-collapse collapse in">
                <div class="panel-body">${obj["answer"]}</div>
              </div>
            </div>`);

    })
});