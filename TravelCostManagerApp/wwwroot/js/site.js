// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function createNewMemberField() {
    AddRow($("#addTripMemberNameField").val(), $("#addTripMemberNumberField").val());
    $("#addTripMemberNameField").val("");
    $("#addTripMemberNumberField").val("");
    var table = document.getElementsByTagName('table')[0];

    if (table.style.visibility = "hidden") {
        table.style.visibility = "visible";


    }

   
}
function AddRow(name, phoneNumber) {
    var tBody = document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
    row = tBody.insertRow(-1);

    var cell = $(row.insertCell(-1));
    cell.html(name);

    cell = $(row.insertCell(-1));
    cell.html(phoneNumber);

    cell = $(row.insertCell(-1));
    let btn = document.createElement("button");
    btn.classList = "btn btn-danger";
    btn.innerHTML = "Delete";

    btn.onclick = function () {
        var row = btn.parentNode.parentNode;
        var name = $("TD", row).eq(0).html();
        
       row.parentNode.removeChild(row);
        
    };
    cell.append(btn);

}

function Remove(button) {
    var row = btn.parentNode.parentNode;
    var name = $("TD", row).eq(0).html();
    //if (confirm("Do you want to remove: " + name)) {
    //    row.parentNode.removeChild(row);
    //}
}

