const AboutPageAsync = React.lazy(() => new Promise(resolve => {
    //@ts-ignore
    setTimeout(() => resolve(import('./aboutPage')), 2500)
}));