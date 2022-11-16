<template>
    <div>
        <list/>
        <div style="height:440px">
            <list3 style="display:inline-block;float:left"/>
            <list4 style="display:inline-block;float:right"/>  
        </div>
        <div class="msg">
            <p>
                尽管人类社会已经得到了快速发展，也取得了很多生产力、科学技术等方面的成果，但在发展的同时一定程度上损害了自然环境，
            使得大自然中很多动植物种类逐渐消失尤其是野生动物，所以我国非常重视野生动物保护。如今，我国很多地区的野生动物都已经得到了等级
            性保护，包括一级保护和二级保护动物等，但依然有部分野生动物还没有得到很好的保护，所以进一步加强野生动物保护、优化生态环境是非常必要和重要的，理应得到重视及关注。
            生态环境一直都影响着野生动物生存，好的生态环境能够促进野生动物繁殖，并对野生动
            </p>
            <p>
                物起到很好的保护作用，所以优化生态环境长期以来都被我国纳为保护野生动物的最佳路径，也在很多地区得到了贯彻和实施。尽管如此，
            但部分地区的生态环境依然没有得到优化，反而因为工业发展而受到了破坏，导致部分野生动物失去生存空间，最后物种濒临，足以见得生态环境对野生动物保护的重要性。
            对此，下文先简单分析了我国野生动物资源情况及野生动物保护现状，然后基于生态环境对我国野生动物保护对策进行了深入探讨。
            </p>
        </div>
        <div style="height:440px">
            <list1 style="display:inline-block;float:left"/>
            <list2 style="display:inline-block;float:right"/>
        </div>
        <p class="msg">
             科学家们说，全球变暖不仅是造成冰盖缩小的原因，也是造成极端天气激增的原因，极端天气激增导致热浪，森林大火和干旱。北极熊站在一块逐渐萎缩的冰块上，显然已经搁浅，已经成为人们熟悉的图像，象征着气候变化的破坏性影响。
        由于北极熊是有力的游泳者，而全球变暖造成的气候变化将主要通过限制捕食猎物来影响它们，因此这种形象有些令人误解。然而，研究人员一致认为，即使很小的温度变化也足以威胁数百头已经挣扎的动物。根据发表在《气候变化》杂志上的一项研究，到二十世纪初，由于气候变化，世界上最自然最富裕的地区中多达一半的动植物物种可能面临灭绝。
        </p>      
    </div>
</template>

<script>
    import list from '../chart/list';
    import list1 from '../chart/list1';
    import list2 from '../chart/list2';
    import list3 from '../chart/list3';
    import list4 from '../chart/list4';
    export default {
        name:'listVue',
        msg:'尽管人类社会已经得到了快速发展，也取得了很多生产力、科学技术等方面的成果，但在发展的同时一定程度上损害了自然环境，使得大自然中很多动植物种类逐渐消失尤其是野生动物，所以我国非常重视野生动物保护。如今，我国很多地区的野生动物都已经得到了等级性保护，包括一级保护和二级保护动物等，但依然有部分野生动物还没有得到很好的保护，所以进一步加强野生动物保护、优化生态环境是非常必要和重要的，理应得到重视及关注',
        components:{
            list,
            list4,
            list1,   
            list2,
            list3,
        }
    }
</script>

<style>
/* * {
    background-color: rgb(247, 243, 243);
} */
    .msg {
        font-size: 16px;
        text-indent: 2em;
        margin-bottom: 40px;
    }
</style>