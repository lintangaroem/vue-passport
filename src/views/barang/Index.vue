<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>BARANG BAWAANKUHH</h4>
            <hr />
            <router-link :to="{ name: 'barang.create' }" class="btn btn-md btn-secondary">TAMBAH BARANG</router-link>

            <table class="table table-striped table-bordered mt-4">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">NAMA</th>
                  <th scope="col">HARGA</th>
                  <th scope="col">STOK</th>
                  <th scope="col">OPTION</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(barang, index) in barangs" :key="index">
                  <td>{{ barang.nama }}</td>
                  <td>{{ barang.harga }}</td>
                  <td>{{ barang.stok }}</td>
                  <td class="text-center">
                    <router-link :to="{ name: 'barang.edit', params: { id: barang.id } }" class="btn btn-sm btn-primary mr-1">EDIT</router-link> |
                    <button @click.prevent="barangDelete(barang.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    //reactive state
    let barangs = ref([]);

    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get('http://localhost:8000/api/barang')
        .then((response) => {
          //assign state barangs with response data
          barangs.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    //method delete
    function barangDelete(id) {
      //delete data barang by ID
      axios
        .delete(`http://localhost:8000/api/barang/${id}`)
        .then(() => {
          //splice barangs
          barangs.value.splice(barangs.value.indexOf(id), 1);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    //return
    return {
      barangs,
      barangDelete,
    };
  },
};
</script>

<style>
body {
  background: lightgray;
}
</style>
