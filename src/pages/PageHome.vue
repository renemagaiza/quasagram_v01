<template>
  <q-page class="constrain q-pa-md bg-grey-5">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card 
          v-for="post in posts"
          :key="post.id"
          class="card-post q-mb-md" 
          flat 
          bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">Rene__Magaiza</q-item-label>
          <q-item-label caption>
            {{post.location}}
          </q-item-label>
        </q-item-section>
      </q-item>

        <q-separator vertical />

        <q-img
        :src="post.imageUrl"
      />

      <q-card-section>
        <div >{{ post.caption }}</div>
        <div class="text-caption text-grey">{{ post.date | niceDate}}</div>
      </q-card-section>


    </q-card>
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
        <q-item-section avatar>
          <q-avatar size="48px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">Rene__Magaiza</q-item-label>
          <q-item-label caption>
            Rene Magaiza
          </q-item-label>
        </q-item-section>
      </q-item>

      </div>
    </div>
   
  </q-page>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'PageHome',
  data(){
    return{
      posts: [
        {
          id: 1,
          caption: 'Golden Gate Dridge',
          date: 36787767876678,
          location: 'Inhambane, Mozambique',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg' 

        },
        {
          id: 2,
          caption: 'Golden Gate Dridge',
          date: 36787767876678,
          location: 'Inhambane, Mozambique',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg' 

        },
        {
          id: 3,
          caption: 'Golden Gate Dridge',
          date: 36787767876678,
          location: 'Inhambane, Mozambique',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg' 

        },
        {
          id: 4,
          caption: 'Golden Gate Dridge',
          date: 36787767876678,
          location: 'Inhambane, Mozambique',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg' 

        }
      ]
    }
  },
  filters: {
    niceDate(value){
      return  date.formatDate(value, 'MMM D h:mmA')
    }
  }
}
</script>

<style lang="sass">
  .card-post
    .q-img
      min-height: 200px

</style>
