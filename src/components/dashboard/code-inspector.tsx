"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Play, FileText } from "lucide-react"

export function CodeInspectorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Code Inspector</h1>
        <p className="text-muted-foreground">Analyze and inspect your code with AI-powered insights</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Static Analysis
            </CardTitle>
            <CardDescription>Analyze code quality, security vulnerabilities, and best practices</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Start Analysis
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Documentation
            </CardTitle>
            <CardDescription>Generate comprehensive documentation from your codebase</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Generate Docs
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Inspections</CardTitle>
            <CardDescription>View your latest code analysis results</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="w-full">
              View History
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload Code</CardTitle>
          <CardDescription>Drop your files here or click to browse</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <Code className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <p className="mt-2 text-sm text-muted-foreground">Drag and drop your code files here</p>
            <Button className="mt-4">Browse Files</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
