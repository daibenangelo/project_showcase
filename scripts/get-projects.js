$(document).ready(function () {
  fetch("database/projects.json")
    .then((response) => response.json())
    .then((data) => {
      let projects = data.projects;
      let card_full = "";
      for (let i = 0; i < projects.length; i++) {
        let proj_image = "img/" + projects[i].image;
        let proj_name = projects[i].name;
        let proj_author = projects[i].author;
        let proj_period = projects[i].period;
        let proj_batch = projects[i].batch;
        let proj_category = projects[i].category;
        let proj_github = projects[i].repo_link;
        let proj_live = projects[i].live_link;
        let proj_good = projects[i].good_pts.join(", ");
        let proj_bad = projects[i].bad_pts.join(", ");
        let card =
          '<div class="col-lg-4 mb-4"> <div class="card text-center"> <img src=' +
          proj_image +
          ' class="card-img-top" alt="proj"/> <div class="card-body"> <h1 class="card-title proj-title">' +
          proj_name +
          '</h1> <p class="mt-2"' +
          proj_period +
          '></p><a class="btn btn-view" data-bs-toggle="modal" data-bs-target="#modal-proj-' +
          i +
          '" > More Info </a> </div></div><div class="modal fade" id="modal-proj-' +
          i +
          '" tabindex="-1"> <div class="modal-dialog modal-lg"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="exampleModalLabel"> ' +
          proj_name +
          ' </h5> <button type="button" class="btn-close" data-bs-dismiss="modal" ></button> </div><div class="modal-body"> <div class="row"> <div class="col-lg-6"> <img src=' +
          proj_image +
          ' class="img-fluid" alt="project ' +
          i +
          ' preview"/> </div><div class="col-lg-6"> <table class="table"> <tr> <td><b>Author(s):</b></td><td>' +
          proj_author +
          "</td></tr><tr> <td><b>Project:</b></td><td>" +
          proj_period +
          "</td></tr><tr> <td><b>Batch:</b></td><td>WD" +
          proj_batch +
          "</td></tr><tr> <td><b>Type:</b></td><td>" +
          proj_category +
          "</td></tr><tr> <td><b>Links:</b></td><td><a href='" +
          proj_github +
          "' target='_blank'>GitHub</a> | <a href='" +
          proj_live +
          "' target='_blank'>Live</a></td></tr><tr></tr></table> </div><hr><h4>Results</h4><div class='col-lg-12'><b>What was done well?</b> " +
          proj_good +
          "</div><div class='col-lg-12'><b>What can be improved?</b> " +
          proj_bad +
          "</div></div></div></div></div></div></div>";
        card_full += card;
      }
      document.getElementById("cards").innerHTML = card_full;
      console.log(card_full);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});
