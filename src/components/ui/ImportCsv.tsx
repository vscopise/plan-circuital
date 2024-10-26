'use client';

import React, { useState, CSSProperties } from 'react';
import { useCSVReader } from 'react-papaparse';

const styles = {
    csvReader: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
    } as CSSProperties,
    browseFile: {
      width: '40%',
    } as CSSProperties,
    acceptedFile: {
      border: '1px solid #ccc',
      height: 45,
      lineHeight: 2.5,
      paddingLeft: 10,
      width: '60%',
    } as CSSProperties,
    remove: {
      borderRadius: 0,
      padding: '0 20px',
    } as CSSProperties,
    progressBarBackgroundColor: {
      backgroundColor: 'red',
    } as CSSProperties,
  };
  

export const ImportCsv = () => {

    const { CSVReader } = useCSVReader();

    const [uploading, setUploading] = useState(false);

    return (
        <div>
            <CSVReader
                onUploadAccepted={(results: any) => {
                    setUploading(true);

                    fetch("/api/upload/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            csv: results,
                        }),
                    })
                        .then(() => {
                            setUploading(false);
                            console.log("CSV uploaded!");
                        })
                        .catch((error) => {
                            setUploading(false);
                            console.warn(error);
                        });
                }}
            >
                {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                }: any) => (
                    <>
                        <div style={styles.csvReader}>
                            <button className="btn btn-primary" type='button' {...getRootProps()}>
                                Cargar archivo
                            </button>
                            <div style={styles.acceptedFile}>
                                {acceptedFile && acceptedFile.name}
                            </div>
                            <button {...getRemoveFileProps()} style={styles.remove}>
                                Quitar
                            </button>
                        </div>
                        <ProgressBar style={styles.progressBarBackgroundColor} />
                    </>
                )}
            </CSVReader>
        </div>
    )
}
