
$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://5db2bba7e9751d0014cd05bb.mockapi.io/events"
      })
      .done(function(data) {
        $.each(data, function(key, value) {
          let date = new Date(value.date);
          let year = date.getFullYear();
          let month = (date.getMonth()+1);
          let day = date.getDate();
          let hour = ('0'  + date.getUTCHours()).slice(-2);
          let minute = ('0'  + date.getMinutes()).slice(-2);
          $(".events")              
            .append(
                "<tr>" +
                "<td>" + day + "/" + month + "/" + year + "</td>" +
                "<td>" + hour + ":" + minute + "</td>" +
                "<td>" + value.companyName + "</td>" +
                "<td>" + value.description + "</td>" +
                "<td>" + value.custmerid + "</td>" +
              "</tr>"
            );
        });
        var number = 0;
        $.each(data, function(key, value) {
          let date = new Date(value.date);
          let year = date.getFullYear();
          let month = (date.getMonth()+1);
          let day = date.getDate();
          let hour = ('0'  + date.getUTCHours()).slice(-2);
          let minute = ('0'  + date.getMinutes()).slice(-2);
            if(number < 2){
            $(".modal-body")             
              .append(
                "<p> &#x1F552; " + hour + ":" + minute + " &#9679; " +  value.companyName +  
                " &#10097; " + value.description + "</p>" +
                "<hr></hr>"
              );
            }else if(number < 3){
                $(".modal-body")             
                  .append(
                    "<p> &#x1F552; " + hour + ":" + minute + " &#9679; " +  value.companyName + 
                    " &#10097; " + value.description + "</p>"
                  );
                }else if(number > 3){
                return false;
                 }
          number += 1;
          });
      });
  });