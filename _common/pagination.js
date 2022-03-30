const DEFAULT_OPTIONS = {
  previousText: 'PREVIOUS',
  nextText: 'NEXT',
}
const PAGINATION_CONTAINER_UPPER = 'docsify-pagination-container-upper';
const PAGINATION_CONTAINER_LOWER = 'docsify-pagination-container-lower';
const PAGINATION_CONTAINER_CLASS = 'docsify-pagination-container';


function toArray (elements) {
  return Array.prototype.slice.call(elements)
}
function findHyperlink (li) {
  return li.querySelectorAll('a')
}
function isALinkTo (path, element) {
  if (arguments.length === 1) {
    return (element) => isALinkTo(path, element)
  }
  return element.getAttribute('href').split('?')[0] === `#${path}`
}
class Link {
  constructor (element) {
    if (!element) {
      return
    }
    this.hyperlink = element
  }
  toJSON () {
    if (!this.hyperlink) {
      return
    }
    return {
      name: this.hyperlink.innerText,
      href: this.hyperlink.getAttribute('href'),
    }
  }
}

function getPaginationData (vm) {
  try {
    const path = vm.route.path
    const all = toArray(document.querySelectorAll('.sidebar li a'))
    const active = all.find(isALinkTo(path))
    const index = all.findIndex((item) => {
      return isALinkTo(path, item)
    })
    return {
      prev: new Link(all[index - 1]).toJSON(),
      next: new Link(all[index + 1]).toJSON(),
    }
  } catch (error) {
    console.log("error");
    return {}
  }
}

const template = {
  upper (data, options) {
    return [
      data.prev && `
        <div class="pagination-item pagination-item--previous">
          <a href="${data.prev.href}">
            <div class="pagination-item-label">
              <svg class="icon" width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                <polyline fill="none" vector-effect="non-scaling-stroke" points="8,2 2,8 8,14"/>
              </svg>
              <span>${options.previousText}</span>
            </div>
            <div class="pagination-item-title"></div>
          </a>
        </div>
      `,
      data.next && `
        <div class="pagination-item pagination-item--next">
          <a href="${data.next.href}">
            <div class="pagination-item-label">
              <span>${options.nextText}</span>
              <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                <polyline fill="none" vector-effect="non-scaling-stroke" points="2,2 8,8 2,14"/>
              </svg>
            </div>
            <div class="pagination-item-title"></div>
          </a>
        </div>
      `
    ].filter(Boolean).join('')
  },
  lower (data, options) {
    return [
      data.prev && `
        <div class="pagination-item pagination-item--previous">
          <a href="${data.prev.href}">
            <div class="pagination-item-label">
              <svg class="icon" width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                <polyline fill="none" vector-effect="non-scaling-stroke" points="8,2 2,8 8,14"/>
              </svg>
              <span>${options.previousText}</span>
            </div>
            <div class="pagination-item-title">${data.prev.name}</div>
          </a>
        </div>
      `,
      data.next && `
        <div class="pagination-item pagination-item--next">
          <a href="${data.next.href}">
            <div class="pagination-item-label">
              <span>${options.nextText}</span>
              <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                <polyline fill="none" vector-effect="non-scaling-stroke" points="2,2 8,8 2,14"/>
              </svg>
            </div>
            <div class="pagination-item-title">${data.next.name}</div>
          </a>
        </div>
      `
    ].filter(Boolean).join('')
  },
}

function install (hook, vm) {
  let options = Object.assign({}, DEFAULT_OPTIONS, vm.config.pagination || {})

  function render () {
    const containerUpper = document.getElementById(PAGINATION_CONTAINER_UPPER);
    const containerLower = document.getElementById(PAGINATION_CONTAINER_LOWER);
    const paginationData = getPaginationData(vm);
    containerUpper.innerHTML = template.upper(paginationData, options)
    containerLower.innerHTML = template.lower(paginationData, options)
  }

  hook.afterEach((html) => `<div id="${PAGINATION_CONTAINER_UPPER}" class="${PAGINATION_CONTAINER_CLASS}"></div>` + html + `<div id="${PAGINATION_CONTAINER_LOWER}" class="${PAGINATION_CONTAINER_CLASS}"></div>`)
  hook.doneEach(() => render())
}

window.$docsify = window.$docsify || {}
window.$docsify.plugins = [install].concat(window.$docsify.plugins || [])
