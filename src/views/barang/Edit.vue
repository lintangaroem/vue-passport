<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>EDIT BARANG</h4>
                        <hr>

                        <form @submit.prevent="update">
                            <div class="form-group">
                                <label for="nama" class="font-weight-bold">NAMA</label>
                                <input type="text" class="form-control" v-model="barang.nama" placeholder="Masukkan Nama Barang">
                                <!-- validation -->
                                <div v-if="validation.nama" class="mt-2 alert alert-danger">
                                    {{ validation.nama[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="harga" class="font-weight-bold">HARGA</label>
                                <textarea class="form-control" rows="4" v-model="barang.harga" placeholder="Masukkan Harga"></textarea>
                                <!-- validation -->
                                <div v-if="validation.harga" class="mt-2 alert alert-danger">
                                    {{ validation.harga[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="stok" class="font-weight-bold">STOK</label>
                                <textarea class="form-control" rows="4" v-model="barang.stok" placeholder="Masukkan Harga"></textarea>
                                <!-- validation -->
                                <div v-if="validation.harga" class="mt-2 alert alert-danger">
                                    {{ validation.harga[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state barangs
        const barang = reactive({
            nama: '',
            harga: '',
            stok:'',
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get(`http://localhost:8000/api/barang/${route.params.id}`)
            .then(response => {
              
              //assign state barangs with response data
              barang.nama    = response.data.data.nama  
              barang.harga  = response.data.data.harga  
              barang.stok  = response.data.data.stok 

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let nama   = barang.nama
            let harga = barang.harga
            let stok = barang.stok


            axios.put(`http://localhost:8000/api/barang/${route.params.id}`, {
                nama: nama,
                harga: harga,
                stok: stok,
            }).then(() => {

                //redirect ke barang index
                router.push({
                    name: 'barang.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            barang,
            validation,
            router,
            update
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>