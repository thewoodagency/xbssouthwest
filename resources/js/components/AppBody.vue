<template>
    <v-layout
            row
            padding="10px"

    >
        <v-flex xs2>
        </v-flex>
        <v-flex xs8>
            <div class="pb-5">
                <logo-section></logo-section>
                <p>We're excited to announce that in furtherance of our mission to provide the best possible customer
                    and employee experience and to better leverage our significant combined service & technical
                    resources, ImageTek, has joined forces with Denitech, ASI, OneSource and Dahill to become Xerox
                    Business Solutions Southwest.
                </p>
                <p>This is not an ownership change; all five companies have been part of the Xerox family operating
                    independently as sister companies since as far back as 2007. Aligning with our customers digital
                    transformation and evolving technology goals, joining forces elevates our ability to deliver the
                    technology, services and support they have today faster and more seamlessly. In addition, you will
                    have access to a vast portfolio of business-changing innovations and Workflow Automations that can
                    add profitable efficiencies to your business. All of our companies have a long and distinguished
                    history, so instead of keeping one of our current names we choose to emphasize our heritage as part
                    of an iconic technology powerhouse, while communicating our pride in remaining a local organization
                    committed to the communities we serve.
                </p>
                <p>Many of the benefits of this transition will be seamless improvements, in the future, a suite of
                    additional amenities & enhancements will also become available. Behind the scenes the excellent
                    service staff and support technicians you work with today, together with the over eight hundred
                    (800) team members of our new organization, will be sharing best practices, creating synergies,
                    simplifying the way we work and improving our overall customer experience.
                </p>
                <p>This transition is much more than a name change - it's a game changer. With the resources, services
                    and technologies Xerox Business Solutions Southwest can offer you've been upgraded and there is
                    nothing new to purchase, no contractual implications or forced renewals.
                </p>
                <p>In the coming months, the ImageTek name and logo will fully transition to Xerox Business Solutions
                    Southwest. This will be reflected on invoices, business cards, signage, delivery vehicles and more.
                <p>We appreciate our partnership, please reach out to us with any questions or to schedule an account
                    review, call or meeting at XBSsupport@xerox.com or 210-805-9750.
                </p>
                <hr class="my-5" style="height:3px;border:none;color:#333;background-color:#333;" />
                <question-list></question-list>
                <p class="font-weight-bold p-4">If you have any additional questions:<br>
                    Email us at <a href="mailto:XBSsupport@xerox.com">XBSsupport@xerox.com</a>, call us at 210-805-9750, or consult with your local account executive.</p>
            </div>
        </v-flex>
        <v-flex xs2>
        </v-flex>

    </v-layout>
</template>

<script>
    import LogoSection from './LogoSecion';
    import QuestionList from './QuestionList';

    export default {
        name: "AppBody",
        components: { LogoSection, QuestionList }
    }
</script>

<style scoped>

</style>
