function fetchResource(resource, id) {
  return fetch(`/api/${resource}/${id}`)
}
export function makeFetch(resource) {
  return (id) => {
    return fetchResource(resource, id)
  }
}

export const findById = (resources, id) => {
  return resources.find(r => r.id === id)
}

export const upsert = (resources, resource) => {
  const resourceIndex = resources.findIndex(r => r.id === resource.id)
  console.log('resourceIndex: ', resourceIndex)
  if (resourceIndex !== -1) {
    resources[resourceIndex] = resource
  } else {
    resources.push(resource)
  }
}
