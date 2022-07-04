let selectedRow = null
let total = 0;

function onFormSubmit(e) {
	event.preventDefault();
        let formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    let formData = {};
    formData["rollNumber"] = document.getElementById("rollNumber").value;
    formData["studentName"] = document.getElementById("studentName").value;
    formData["DOB"] = document.getElementById("DOB").value;
    formData["tamilMark"] = document.getElementById("tamilMark").value;
    formData["englishMark"] = document.getElementById("englishMark").value;
    formData["mathsMark"] = document.getElementById("mathsMark").value;
    formData["scienceMark"] = document.getElementById("scienceMark").value;
    formData["socialMark"] = document.getElementById("socialMark").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    let table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.rollNumber;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.studentName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.DOB;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.tamilMark;
        cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.englishMark;
        cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.mathsMark;
        cell7 = newRow.insertCell(6);
		cell7.innerHTML = data.scienceMark;
        cell8 = newRow.insertCell(7);
		cell8.innerHTML = data.socialMark;
        total = Number(data.tamilMark)+Number(data.englishMark)+Number(data.mathsMark)+Number(data.scienceMark)+Number(data.socialMark);
        cell9 = newRow.insertCell(8);
		cell9.innerHTML = total;
        cell10 = newRow.insertCell(9);
        let a ="fail", b="pass";
		cell10.innerHTML = (total < 175) ? a : b;
    cell11 = newRow.insertCell(10);
        cell11.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("rollNumber").value = selectedRow.cells[0].innerHTML;
    document.getElementById("studentName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("DOB").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tamilMark").value = selectedRow.cells[3].innerHTML;
    document.getElementById("englishMark").value = selectedRow.cells[4].innerHTML;
    document.getElementById("mathsMark").value = selectedRow.cells[5].innerHTML;
    document.getElementById("scienceMark").value = selectedRow.cells[6].innerHTML;
    document.getElementById("socialMark").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.rollNumber;
    selectedRow.cells[1].innerHTML = formData.studentName;
    selectedRow.cells[2].innerHTML = formData.DOB;
    selectedRow.cells[3].innerHTML = formData.tamilMark;
    selectedRow.cells[4].innerHTML = formData.englishMark;
    selectedRow.cells[5].innerHTML = formData.mathsMark;
    selectedRow.cells[6].innerHTML = formData.scienceMark;
    selectedRow.cells[7].innerHTML = formData.socialMark;
    total = Number(formData.tamilMark)+Number(formData.englishMark)+Number(formData.mathsMark)+Number(formData.scienceMark)+Number(formData.socialMark);
    selectedRow.cells[8].innerHTML = total;
    let a ="fail", b="pass";
    selectedRow.cells[9].innerHTML = (total < 175) ? a : b;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("rollNumber").value = '';
    document.getElementById("studentName").value = '';
    document.getElementById("DOB").value = '';
    document.getElementById("tamilMark").value = '';
    document.getElementById("englishMark").value = '';
    document.getElementById("mathsMark").value = '';
    document.getElementById("scienceMark").value = '';
    document.getElementById("socialMark").value = '';
    selectedRow = null;
}

function back(){
    window.location.href="dashboard.html"
}