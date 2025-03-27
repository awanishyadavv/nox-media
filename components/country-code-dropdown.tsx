"\"use client"

import { useState } from "react"
import Image from "next/image"

export interface Country {
  name: string
  code: string
  dial_code: string
  flag: string
}

interface CountryCodeDropdownProps {
  selectedCountry: Country
  onSelect: (country: Country) => void
}

export default function CountryCodeDropdown({ selectedCountry, onSelect }: CountryCodeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectCountry = (country: Country) => {
    onSelect(country)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <Image
          src={selectedCountry.flag || "/placeholder.svg"}
          alt={selectedCountry.name}
          width={20}
          height={15}
          className="mr-2 rounded"
        />
        {selectedCountry.dial_code}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-black/80 backdrop-blur-sm border border-white/10 z-10">
          <div className="py-1">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => selectCountry(country)}
                className="text-white flex items-center w-full px-4 py-2 text-sm hover:bg-purple-600 hover:text-white transition-colors"
              >
                <Image
                  src={country.flag || "/placeholder.svg"}
                  alt={country.name}
                  width={20}
                  height={15}
                  className="mr-2 rounded"
                />
                {country.name} ({country.dial_code})
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Export the countries array so it can be imported elsewhere
export const countries: Country[] = [
  { name: "India", code: "IN", dial_code: "+91", flag: "https://flagcdn.com/w20/in.png" },
  { name: "United States", code: "US", dial_code: "+1", flag: "https://flagcdn.com/w20/us.png" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "https://flagcdn.com/w20/gb.png" },
  { name: "Canada", code: "CA", dial_code: "+1", flag: "https://flagcdn.com/w20/ca.png" },
  { name: "China", code: "CN", dial_code: "+86", flag: "https://flagcdn.com/w20/cn.png" },
  { name: "Japan", code: "JP", dial_code: "+81", flag: "https://flagcdn.com/w20/jp.png" },
  { name: "Germany", code: "DE", dial_code: "+49", flag: "https://flagcdn.com/w20/de.png" },
  { name: "France", code: "FR", dial_code: "+33", flag: "https://flagcdn.com/w20/fr.png" },
  { name: "Italy", code: "IT", dial_code: "+39", flag: "https://flagcdn.com/w20/it.png" },
  { name: "Brazil", code: "BR", dial_code: "+55", flag: "https://flagcdn.com/w20/br.png" },
  { name: "Australia", code: "AU", dial_code: "+61", flag: "https://flagcdn.com/w20/au.png" },
  { name: "Russia", code: "RU", dial_code: "+7", flag: "https://flagcdn.com/w20/ru.png" },
  { name: "South Korea", code: "KR", dial_code: "+82", flag: "https://flagcdn.com/w20/kr.png" },
  { name: "Singapore", code: "SG", dial_code: "+65", flag: "https://flagcdn.com/w20/sg.png" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "https://flagcdn.com/w20/ae.png" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966", flag: "https://flagcdn.com/w20/sa.png" },
  { name: "South Africa", code: "ZA", dial_code: "+27", flag: "https://flagcdn.com/w20/za.png" },
  { name: "Nigeria", code: "NG", dial_code: "+234", flag: "https://flagcdn.com/w20/ng.png" },
  { name: "Kenya", code: "KE", dial_code: "+254", flag: "https://flagcdn.com/w20/ke.png" },
  { name: "Ghana", code: "GH", dial_code: "+233", flag: "https://flagcdn.com/w20/gh.png" },
  { name: "Egypt", code: "EG", dial_code: "+20", flag: "https://flagcdn.com/w20/eg.png" },
  { name: "Morocco", code: "MA", dial_code: "+212", flag: "https://flagcdn.com/w20/ma.png" },
  { name: "Pakistan", code: "PK", dial_code: "+92", flag: "https://flagcdn.com/w20/pk.png" },
  { name: "Sri Lanka", code: "LK", dial_code: "+94", flag: "https://flagcdn.com/w20/lk.png" },
  { name: "Nepal", code: "NP", dial_code: "+977", flag: "https://flagcdn.com/w20/np.png" },
  { name: "Afghanistan", code: "AF", dial_code: "+93", flag: "https://flagcdn.com/w20/af.png" },
  { name: "Albania", code: "AL", dial_code: "+355", flag: "https://flagcdn.com/w20/al.png" },
  { name: "Algeria", code: "DZ", dial_code: "+213", flag: "https://flagcdn.com/w20/dz.png" },
  { name: "American Samoa", code: "AS", dial_code: "+1684", flag: "https://flagcdn.com/w20/as.png" },
  { name: "Andorra", code: "AD", dial_code: "+376", flag: "https://flagcdn.com/w20/ad.png" },
  { name: "Angola", code: "AO", dial_code: "+244", flag: "https://flagcdn.com/w20/ao.png" },
  { name: "Anguilla", code: "AI", dial_code: "+1264", flag: "https://flagcdn.com/w20/ai.png" },
  { name: "Antarctica", code: "AQ", dial_code: "+672", flag: "https://flagcdn.com/w20/aq.png" },
  { name: "Antigua and Barbuda", code: "AG", dial_code: "+1268", flag: "https://flagcdn.com/w20/ag.png" },
  { name: "Argentina", code: "AR", dial_code: "+54", flag: "https://flagcdn.com/w20/ar.png" },
  { name: "Armenia", code: "AM", dial_code: "+374", flag: "https://flagcdn.com/w20/am.png" },
  { name: "Aruba", code: "AW", dial_code: "+297", flag: "https://flagcdn.com/w20/aw.png" },
  { name: "Austria", code: "AT", dial_code: "+43", flag: "https://flagcdn.com/w20/at.png" },
  { name: "Azerbaijan", code: "AZ", dial_code: "+994", flag: "https://flagcdn.com/w20/az.png" },
  { name: "Bahamas", code: "BS", dial_code: "+1242", flag: "https://flagcdn.com/w20/bs.png" },
  { name: "Bahrain", code: "BH", dial_code: "+973", flag: "https://flagcdn.com/w20/bh.png" },
  { name: "Bangladesh", code: "BD", dial_code: "+880", flag: "https://flagcdn.com/w20/bd.png" },
  { name: "Barbados", code: "BB", dial_code: "+1246", flag: "https://flagcdn.com/w20/bb.png" },
  { name: "Belarus", code: "BY", dial_code: "+375", flag: "https://flagcdn.com/w20/by.png" },
  { name: "Belgium", code: "BE", dial_code: "+32", flag: "https://flagcdn.com/w20/be.png" },
  { name: "Belize", code: "BZ", dial_code: "+501", flag: "https://flagcdn.com/w20/bz.png" },
  { name: "Benin", code: "BJ", dial_code: "+229", flag: "https://flagcdn.com/w20/bj.png" },
  { name: "Bermuda", code: "BM", dial_code: "+1441", flag: "https://flagcdn.com/w20/bm.png" },
  { name: "Bhutan", code: "BT", dial_code: "+975", flag: "https://flagcdn.com/w20/bt.png" },
]

