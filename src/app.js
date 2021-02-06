const Apps = {
  data: function () {
    return {
      place: "...",
      title: 'Список заметок',
      inputValue: '',
      notes: []
    }
  },
  methods: {
    inputChangeHandler (event) {
      this.inputValue = event.target.value;
    },
    async inputNotes () {
      const dataa = {
        text: this.inputValue
      }
      const res = await fetch('/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataa)
      })
      const newPost = await res.json()
      console.log(newPost)
      this.notes.push(newPost)
    },
    async deleteNote (id) {
      this.notes =  this.notes.filter((item)=> item.id != id) 
      await fetch(`/server/${id}`, {method: 'DELETE'})     
    },
  },
  async mounted() {
    const res = await (await fetch('/server')).json()
    this.notes = res.posts
  }
}

const app = Vue.createApp(Apps)
app.mount('#app');
// Apps.methods.addNewNotes();


