import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format'

/**
 * string with BTC suffix
 *
 * @param {string} v
 * @returns {string}
 */
export const btcString = v => {
  const vFloat = v * 0.00000001

  if (vFloat === 0) {
    return '0 BTC'
  }

  return `${vFloat.toFixed(8).toLocaleString()} BTC`
}

export const formatTime = v => format(fromUnixTime(v), 'yyyy-MM-dd HH:mm:ss')

export const copyText = text => {
  const ipt = document.createElement('input')
  ipt.value = text
  document.body.appendChild(ipt)
  ipt.select()

  document.execCommand('copy')

  ipt.remove()
}
