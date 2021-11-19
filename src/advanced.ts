import { createApp } from 'vue'
import CustomizeDisplayData from './examples/CustomizeDisplayData.vue'
import Filter from './examples/Filter.vue'
import CustomizeStyle from './examples/CustomizeStyle.vue'
import CustomizeMessage from './examples/CustomizeMessage.vue'

createApp(CustomizeDisplayData).mount('#customize-display-table')
createApp(Filter).mount('#filter-table')
createApp(CustomizeStyle).mount('#customize-style-table')
createApp(CustomizeMessage).mount('#customize-message-table')