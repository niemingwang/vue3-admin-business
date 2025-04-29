import { cloneDeep, map, trimStart, trimEnd, isArray, some } from 'lodash-es'

/**
 * 获取树的前两层
 * @param tree
 */
export function getFirstTwoLevels(tree: any) {
  return map(cloneDeep(tree), (node) => {
    const newNode = { ...node }
    if (newNode.children) {
      newNode.children = map(newNode.children, (child) => {
        // 删除子节点的 children 属性
        const newChild = { ...child }
        if (newChild.children) {
          delete newChild.children
        }
        return newChild
      })
    }
    return newNode
  })
}

/**
 * 构建 meta 对象
 * @param data
 * @param parentPath
 */
export function addMetaToTree(data: any, parentPath = '') {
  return cloneDeep(data).map((node: any) => {
    const currentPath = trimEnd(parentPath, '/') + '/' + trimStart(node.path || '', '/')

    // 先处理 children，以便拿到子节点的 fullPath
    if (isArray(node.children) && node.children.length > 0) {
      node.children = addMetaToTree(node.children, currentPath)
    }

    // 添加 meta 信息
    node.meta = {
      title: node.name,
      fullPath: currentPath
    }

    if (isArray(node.children) && node.children.length > 0) {
      node.meta.url = node.children[0]?.meta?.fullPath
    }

    return node
  })
}

/**
 * 根据路径查找父节点
 * @param tree
 * @param path
 */
export function findParentNode(tree: any[], path: any): any {
  let parent: any = null

  function traverse(nodes: any[]): boolean {
    return some(nodes, (node) => {
      if (node.children?.some((child: any) => child.path === path)) {
        parent = node
        return true
      }
      return traverse(node.children ?? [])
    })
  }

  traverse(tree)
  return parent
}
