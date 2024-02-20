<template>
    <div class="skip1">
        <h1>skip1</h1>
        <el-button @click="skip('chenjiawei')">skip</el-button>
    </div>
</template>
  
<script>
import skip from '@/mixins/skip.js'  
export default {
    name: 'skip1',
    mixins: [skip],
}
</script>