import jobs from './jobs.json';

async function getJobs(page, q = null) {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        },100);
    });

    await promise;

    if (q) {
        let filterData = jobs.filter(
            (job) =>
            job.title.includes(q) ||
            job.description.includes(q) ||
            job.city.includes(q) ||
            job.skills.some((skill)=> skill.includes(q))
        );
        return { jobs: filterData, pageTotal: 1};
    }else{
        return { jobs: jobs.slice((page-1)*6, page * 6 - 1), pageTotal: 2};
    }
}

 async function getJob(id) {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve();
        }, 100);
    });
    await promise;

    return jobs.find((job)=> job.id === id);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getJobs, getJob};