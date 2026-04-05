import React from 'react'

import OfficePhoneRow from './OfficePhoneRow'
import { SKY_OFFICE_TILE_SHELL_CLASS } from '../constants/skyTileClasses'

/** Shared grid: narrow icon column + text (matches emoji width to phone icons column). */
const ROW_GRID = 'grid grid-cols-[2.75rem_1fr] items-start gap-x-3'

/**
 * Compact office card — location once in header; each line is icon + detail.
 *
 * @param {Object} props
 * @param {string} props.heading - Head Office / Branch Office.
 * @param {string} props.regionLabel - Single location line (e.g. Coimbatore, Tamil Nadu).
 * @param {string} props.address
 * @param {string} [props.landline]
 * @param {string} props.mobile
 * @param {string} props.email
 * @param {string} props.officeLabel
 * @returns {JSX.Element}
 */
function OfficeContactTile({
  heading,
  regionLabel,
  address,
  landline,
  mobile,
  email,
  officeLabel,
}) {
  return (
    <div
      className={`${SKY_OFFICE_TILE_SHELL_CLASS} flex h-full flex-col p-5 text-left shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6`}
    >
      <header className="mb-3 border-b border-sky-100/80 pb-3">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{heading}</h2>
        <p className="mt-0.5 text-sm text-slate-600">{regionLabel}</p>
      </header>

      <address className="not-italic">
        <div className="flex flex-col gap-2.5 text-sm leading-snug text-slate-600 sm:gap-3 sm:text-[0.9375rem] sm:leading-relaxed">
          <div className={ROW_GRID}>
            <span className="flex justify-center pt-0.5 text-base leading-none" aria-hidden="true">
              📍
            </span>
            <span className="min-w-0 pt-0.5">{address}</span>
          </div>

          {landline ? (
            <div className={ROW_GRID}>
              <span className="flex justify-center pt-0.5 text-base leading-none" aria-hidden="true">
                📞
              </span>
              <span className="tabular-nums pt-0.5">{landline}</span>
            </div>
          ) : null}

          <OfficePhoneRow phone={mobile} officeLabel={officeLabel} compactGrid />

          <div className={ROW_GRID}>
            <span className="flex justify-center pt-0.5 text-base leading-none" aria-hidden="true">
              ✉️
            </span>
            <a
              href={`mailto:${email}`}
              className="min-w-0 break-all pt-0.5 hover:text-sky-700 hover:underline sm:break-normal"
            >
              {email}
            </a>
          </div>
        </div>
      </address>
    </div>
  )
}

export default OfficeContactTile
export { OfficeContactTile }
