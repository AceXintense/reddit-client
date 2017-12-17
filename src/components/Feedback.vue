<template>
    <div>
        <modal v-if="showModal" title="Feedback" @close="closeModal" :transparency="false">
            <div class="submittionForm" v-if="!success">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" class="form-control"></textarea>
                </div>

                <div class="form-group">
                    <button class="btn" @click="submitForm">Submit</button>
                </div>
            </div>

            <loader v-if="submitting"></loader>

            <div class="thankyouForSubmitting" v-if="success">
                <i class="fa fa-check" aria-hidden="true" style="font-size: 150px"></i>
                <div class="content">
                    <h3>Thank you for submitting feedback!</h3>
                    <p>I review all feedback and plan them into the product accordingly. For updates see my social media</p>
                    <a href="https://twitter.com/AceXintense" target="_blank" class="btn btn-block btn-default">Twitter</a>
                </div>
            </div>
        </modal>

        <div class="feedback">
            <button class="btn btn-default" @click="showModal =! showModal">Feedback</button>
        </div>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                submitting: false,
                success: false,
                showModal: false
            }
        },
        methods: {
            submitForm() {
                console.log('Submitting!');
                this.submitting = true;
                this.submitting = false;
                this.success = true;
            },
            closeModal() {
                this.submitting = false;
                this.success = false;
                this.showModal = false;
            }
        }
    }

</script>

<style scoped>

    .feedback {
        color: white;
        position: fixed;
        bottom: 10px;
        right: 20px;
        opacity: .8;
        z-index: 100000000;
    }

    .content {
        padding: 40px;
    }

    .feedback .btn {
        background-color: #dcdcdc;
    }

    .feedback .btn:hover {
        background-color: #ffffff;
        opacity: 1;
        cursor: pointer;
    }

</style>