---
layout: page
title: Events
---

<!-- markdownlint-disable-next-line MD041 -->
<ItemGrid
    title="Map making contests"
    description="Events that challenge map makers to create custom maps in a certain theme"
    dataUrl="https://docs.rocketleaguemapmaking.workers.dev/contests?scheme=actions"
    :action="{ text: 'Show more', totalItems: -1 }"
    :rowSize="2"
    :amount="4"
    :descriptionLength="140"
/>

<style scoped>
:deep(.showcase-item img) {
    max-height: 50%;
}

:deep(.showcase-items .VPLink:only-child) {
    width: 50% !important;
}

:deep(.showcase-items:has(.VPLink:only-child)) {
    justify-content: flex-start;
}
</style>
