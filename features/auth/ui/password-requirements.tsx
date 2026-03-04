'use client'

import React from 'react'
import { CheckCircle2, Circle } from 'lucide-react'
import { Text } from '@/shared/ui/Text/text'

interface PasswordRequirement {
	label: string
	isMet: boolean
}

interface PasswordRequirementsProps {
	requirements: PasswordRequirement[]
	visible: boolean
}

const PasswordRequirements = ({
	requirements,
	visible,
}: PasswordRequirementsProps) => {
	if (!visible) return null

	return (
		<div className='absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-[8px] bg-white p-4 border border-[#D8D8D8] shadow-lg'>
			<Text
				variant='p'
				className='text-left text-xs font-semibold text-[#202224] mb-2 mt-0'
			>
				Password Requirements:
			</Text>
			<ul className='space-y-1.5'>
				{requirements.map((req, index) => (
					<li key={index} className='flex items-center gap-2'>
						{req.isMet ? (
							<CheckCircle2 size={14} className='text-green-500 shrink-0' />
						) : (
							<Circle size={14} className='text-gray-300 shrink-0' />
						)}
						<Text
							variant='p'
							className={`text-left text-xs mt-0 ${req.isMet ? 'text-green-700 font-medium' : 'text-gray-500'}`}
						>
							{req.label}
						</Text>
					</li>
				))}
			</ul>
		</div>
	)
}

export default PasswordRequirements
