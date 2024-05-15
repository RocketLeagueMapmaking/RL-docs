# Events

<ItemGrid
    title="Map making contests"
    description="Events that challenge map makers to create custom maps in a certain theme"
    dataUrl="https://docs.rocketleaguemapmaking.workers.dev/contests?scheme=actions"
    :action="{ text: 'Show more', totalItems: -1 }"
    :rowSize="1"
    :amount="3"
    :descriptionLength="140"
/>

<style scoped>
:deep(.showcase-item img) {
    max-height: 50%;
}
</style>
