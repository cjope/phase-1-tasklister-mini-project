document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(event){
    document.getElementById("create-task-form").value += document.getElementById("create-task-form".text)
    event.preventDefault();
  })
});
