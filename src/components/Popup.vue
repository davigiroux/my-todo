<template>
    <v-dialog max-width="600px">
        <v-btn slot="activator" flat class="success">Add new project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" prepend-icon="folder" v-model="project.title" :rules="inputRules"></v-text-field>
                    <v-textarea prepend-icon="edit" label="Information" v-model="project.content" :rules="inputRules"></v-textarea>

                    <v-menu>
                        <v-text-field :value="formattedDate" prepend-icon="date_range" label="Due date" slot="activator"></v-text-field>
                        <v-date-picker v-model="project.due"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn flat class="success mx-0 mt-3" :rules="inputRules" @click="submit">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
    data() {
        return {
            project: {
                title: '',
                content: '',
                due: '',
            },
            inputRules: [
                v => v.length >= 3 || 'Minimun length is 3 characters'
            ]
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()) {
                const project = this.project;
                project.person = 'Davi Giroux'
                project.status = 'ongoing'

                db.collection('projects').add(project).then(res => {
                    console.log(res)
                    console.log('added')
                })
            }
        }
    },
    computed: {
        formattedDate() {
            return this.project.due ? format(this.project.due, 'MM/DD/YYYY') : ''
        }
    }
}
</script>
