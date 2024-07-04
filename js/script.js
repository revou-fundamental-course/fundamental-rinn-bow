document.getElementById("tombol_form").
addEventListener("click", tampilkan_nilai_form);

function tampilkan_nilai_form(){
    var nilai_form=document.getElementById("name_input").value;
    document.getElementById("Name").innnerHtml=nilai_form;
    var nilai_form=document.getElementById("dob_input").value;
    document.getElementById("Date_of_Birth").innnerHtml=nilai_form;
    var nilai_form=document.getElementById("jenis_kelamin").value;
    document.getElementById("Gender").innnerHtml=nilai_form;
    var nilai_form=document.getElementById("message_input").value;
    document.getElementById("Message").innnerHtml=nilai_form;
}


