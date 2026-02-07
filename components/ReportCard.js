import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ChatScreenStyles';

const SECTIONS = [
  { key: 'progress', label: 'Progress' },
  { key: 'timeline', label: 'FIRE Timeline' },
  { key: 'grade', label: 'Grade' },
];

export default function ReportCard({ report }) {
  const [selected, setSelected] = useState('progress');

  return (
    <View style={styles.reportCard}>
      <Text style={styles.reportTitle}>Report</Text>
      <View style={styles.reportHeaderRow}>
        {SECTIONS.map((section) => (
          <TouchableOpacity
            key={section.key}
            style={[styles.reportHeaderBtn, selected === section.key && styles.reportHeaderBtnSelected]}
            onPress={() => setSelected(section.key)}
          >
            <Text style={[styles.reportHeaderBtnText, selected === section.key && styles.reportHeaderBtnTextSelected]}>{section.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selected === 'progress' && (
        <View style={styles.reportSectionDetails}>
          <Text style={styles.reportSectionText}>Goal: {report.goal}</Text>
          <Text style={styles.reportSectionText}>Networth: {report.networth}</Text>
          <Text style={styles.reportSectionText}>Monthly Savings: {report.monthly}</Text>
        </View>
      )}
      {selected === 'timeline' && (
        <View style={styles.reportSectionDetails}>
          <Text style={styles.reportSectionText}>Retire Year: {report.retireYear}</Text>
          <Text style={styles.reportSectionText}>10% Growth: {report.growthYear}</Text>
        </View>
      )}
      {selected === 'grade' && (
        <View style={styles.reportSectionDetails}>
          <Text style={styles.reportSectionText}>Savings rate: {report.savingsRate}</Text>
          <Text style={styles.reportSectionText}>Grade: {report.grade}</Text>
        </View>
      )}
    </View>
  );
} 