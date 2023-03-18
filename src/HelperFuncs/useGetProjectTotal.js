function useGetProjectTotal(project) {
    return project.services.map(({ qty, rate }) => rate * qty).reduce((value, total) => value + total, 0)
}

export default useGetProjectTotal