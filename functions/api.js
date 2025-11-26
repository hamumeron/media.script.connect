import worker from "../src/worker.js";

export const onRequest = ({ request }) => worker.fetch(request);
